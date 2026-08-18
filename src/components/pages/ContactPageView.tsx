"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Briefcase, Calendar, CheckCircle2, Mail, MapPin, Shield } from "lucide-react";

import {
  contactChannels,
  contactHero,
  contactIntents,
  contactNextSteps,
  contactOffices,
  contactProcurementNotes,
  contactTopics,
} from "@/data/pages/contact";
import { CTA_LABELS } from "@/data/cta/copy";
import { PageHero } from "@/components/layout/PageHero";
import { ProcurementExperience } from "@/components/pages/ProcurementExperience";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  readLastCtaClick,
  resolveContactIntent,
  trackCtaFormStart,
  trackCtaFormSubmit,
} from "@/lib/cta";
import { readStoredHeroAbVariant } from "@/lib/ctaAb";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || "";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

function FieldMark({ hint }: { hint: "Required" | "Optional" }) {
  return (
    <span
      className={cn(
        "text-[10px] tracking-[0.16em] uppercase",
        hint === "Required" ? "text-cyan/70" : "text-white/30",
      )}
    >
      {hint}
    </span>
  );
}

function validateContactForm(payload: {
  name: string;
  email: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!payload.name.trim()) errors.name = "Enter your name.";
  if (!payload.email.trim()) errors.email = "Enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
    errors.email = "Enter a valid work email.";
  }
  if (!payload.message.trim()) {
    errors.message = "Tell us what you are trying to solve.";
  }
  return errors;
}

function missingFieldsSummary(errors: FieldErrors) {
  const labels: Record<FieldName, string> = {
    name: "Name",
    email: "Work email",
    message: "What you are trying to solve",
  };
  const missing = (Object.keys(errors) as FieldName[]).map((key) => labels[key]);
  if (missing.length === 0) return "";
  if (missing.length === 1) return `Please complete: ${missing[0]}.`;
  if (missing.length === 2) {
    return `Please complete: ${missing[0]} and ${missing[1]}.`;
  }
  return `Please complete: ${missing.slice(0, -1).join(", ")}, and ${missing.at(-1)}.`;
}

function contactIntentFromTopic(topic: string) {
  const normalized = topic.toLowerCase();
  if (normalized.includes("assessment")) return "assessment" as const;
  if (normalized.includes("security") || normalized.includes("diligence")) {
    return "security" as const;
  }
  return "strategy" as const;
}

function contactSubmitLabel(topic: string) {
  const intent = contactIntentFromTopic(topic);
  if (intent === "assessment") return CTA_LABELS.formSubmitAssessment;
  if (intent === "security") return CTA_LABELS.formSubmitSecurity;
  return CTA_LABELS.formSubmitStrategy;
}

export function ContactPageView() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState(contactTopics[0]);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formStartTracked = useRef(false);
  const topicRef = useRef(topic);
  topicRef.current = topic;
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const intentId = params.get("intent");
    const topicParam = params.get("topic");
    const resolvedIntent = resolveContactIntent(intentId);
    const fromIntent = contactIntents.find((item) => item.id === resolvedIntent);
    if (fromIntent) {
      setTopic(fromIntent.topic);
      return;
    }
    if (topicParam && (contactTopics as readonly string[]).includes(topicParam)) {
      setTopic(topicParam);
    }
  }, []);

  const onFormStart = () => {
    if (formStartTracked.current) return;
    formStartTracked.current = true;
    const last = readLastCtaClick();
    const variant = last?.variant ?? readStoredHeroAbVariant();
    const currentTopic = topicRef.current;
    trackCtaFormStart({
      family: "object",
      pattern: "form-destination",
      intent: contactIntentFromTopic(currentTopic),
      location: "contact.form",
      label: last?.label || contactSubmitLabel(currentTopic),
      href: last?.href || "/contact",
      ...(variant ? { variant } : {}),
    });
  };

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    form.addEventListener("focusin", onFormStart);
    form.addEventListener("input", onFormStart);
    return () => {
      form.removeEventListener("focusin", onFormStart);
      form.removeEventListener("input", onFormStart);
    };
  }, []);

  const clearFieldError = (field: FieldName) => {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setSubmitState((current) =>
      current.status === "error" ? { status: "idle" } : current,
    );
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      topic,
      message: String(data.get("message") || ""),
      source: "website-contact",
    };

    const errors = validateContactForm(payload);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setSubmitState({
        status: "error",
        message: missingFieldsSummary(errors),
      });
      const first = errors.name
        ? nameRef.current
        : errors.email
          ? emailRef.current
          : messageRef.current;
      first?.focus();
      return;
    }

    setSubmitState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        const apiMessage =
          result.error ||
          "Unable to submit right now. Please email hello@inheritx.com.";
        if (apiMessage.toLowerCase().includes("email")) {
          setFieldErrors((current) => ({
            ...current,
            email: apiMessage,
          }));
          emailRef.current?.focus();
        }
        setSubmitState({
          status: "error",
          message: apiMessage,
        });
        return;
      }

      setSubmitted(true);
      setSubmitState({ status: "success" });
      setFieldErrors({});
      const last = readLastCtaClick();
      const variant = last?.variant ?? readStoredHeroAbVariant();
      trackCtaFormSubmit({
        family: "object",
        pattern: "form-destination",
        intent: contactIntentFromTopic(topic),
        location: "contact.form",
        label: contactSubmitLabel(topic),
        href: last?.href || "/contact",
        ...(variant ? { variant } : {}),
      });
      form.reset();
    } catch {
      setSubmitState({
        status: "error",
        message: "Unable to submit right now. Please email hello@inheritx.com.",
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        description={contactHero.description}
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-page gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 md:px-8">
          <Reveal>
            <div className="rounded-[1.75rem] border border-white/10 bg-ink-soft p-6 md:p-8">
              <h2 className="font-display text-2xl text-white md:text-3xl">
                How should we engage?
              </h2>
              <p className="mt-2 text-sm text-white/45">
                Choose an intent—strategy call, architecture assessment, or
                security diligence—then share context. We’ll respond within one
                business day.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {contactIntents.map((intent) => {
                  const active = topic === intent.topic;
                  const assessment = intent.id === "assessment";
                  return (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setTopic(intent.topic)}
                      aria-pressed={active}
                      className={cn(
                        "rounded-2xl border px-4 py-3.5 text-left transition-colors",
                        active
                          ? assessment
                            ? "border-white/25 bg-white/[0.08]"
                            : "border-cyan/40 bg-cyan/15"
                          : "border-white/10 bg-ink hover:border-white/25",
                      )}
                    >
                      <p
                        className={cn(
                          "text-sm font-medium",
                          active
                            ? assessment
                              ? "text-white"
                              : "text-cyan"
                            : "text-white",
                        )}
                      >
                        {intent.label}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-white/40">
                        {intent.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {submitted ? (
                <div className="mt-10 flex items-start gap-3 rounded-2xl border border-cyan/30 bg-cyan/10 p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={20} />
                  <div>
                    <p className="font-medium text-white">Request received</p>
                    <p className="mt-1 text-sm text-white/55">
                      An architect will follow up—usually within one business
                      day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitState({ status: "idle" });
                        setFieldErrors({});
                        formStartTracked.current = false;
                      }}
                      className="mt-4 text-sm text-cyan underline-offset-4 hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={onSubmit}
                  onFocusCapture={onFormStart}
                  className="mt-8 space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-xs tracking-wide text-white/40">
                      <span className="flex items-center justify-between gap-3">
                        Name
                        <FieldMark hint="Required" />
                      </span>
                      <input
                        ref={nameRef}
                        required
                        name="name"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={
                          fieldErrors.name ? "contact-name-error" : undefined
                        }
                        onChange={() => clearFieldError("name")}
                        className={cn(
                          "mt-2 w-full rounded-xl border bg-ink px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-cyan/50 md:py-3 md:text-sm",
                          fieldErrors.name
                            ? "border-red-400/60"
                            : "border-white/10",
                        )}
                        placeholder="Your name"
                      />
                      {fieldErrors.name ? (
                        <p
                          id="contact-name-error"
                          className="mt-1.5 text-xs text-red-300"
                          role="alert"
                        >
                          {fieldErrors.name}
                        </p>
                      ) : null}
                    </label>
                    <label className="block text-xs tracking-wide text-white/40">
                      <span className="flex items-center justify-between gap-3">
                        Work email
                        <FieldMark hint="Required" />
                      </span>
                      <input
                        ref={emailRef}
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={
                          fieldErrors.email ? "contact-email-error" : undefined
                        }
                        onChange={() => clearFieldError("email")}
                        className={cn(
                          "mt-2 w-full rounded-xl border bg-ink px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-cyan/50 md:py-3 md:text-sm",
                          fieldErrors.email
                            ? "border-red-400/60"
                            : "border-white/10",
                        )}
                        placeholder="you@company.com"
                      />
                      {fieldErrors.email ? (
                        <p
                          id="contact-email-error"
                          className="mt-1.5 text-xs text-red-300"
                          role="alert"
                        >
                          {fieldErrors.email}
                        </p>
                      ) : null}
                    </label>
                  </div>
                  <label className="block text-xs tracking-wide text-white/40">
                    <span className="flex items-center justify-between gap-3">
                      Company
                      <FieldMark hint="Optional" />
                    </span>
                    <input
                      name="company"
                      autoComplete="organization"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-cyan/50 md:py-3 md:text-sm"
                      placeholder="Organization"
                    />
                  </label>
                  <div>
                    <p
                      className="flex items-center justify-between gap-3 text-xs tracking-wide text-white/40"
                      id="contact-topic-label"
                    >
                      Topic
                      <FieldMark hint="Required" />
                    </p>
                    <div
                      className="mt-2 flex flex-wrap gap-2"
                      role="group"
                      aria-labelledby="contact-topic-label"
                    >
                      {contactTopics.map((item) => {
                        const selected = topic === item;
                        const assessment = item.toLowerCase().includes("assessment");
                        return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTopic(item)}
                          aria-pressed={selected}
                          className={cn(
                            "inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2.5 text-sm transition-all",
                            selected
                              ? assessment
                                ? "border-white/30 bg-white text-ink"
                                : "border-cyan/40 bg-cyan/15 text-cyan"
                              : "border-white/10 text-white/45 hover:text-white/75",
                          )}
                        >
                          {item}
                        </button>
                        );
                      })}
                    </div>
                  </div>
                  <label className="block text-xs tracking-wide text-white/40">
                    <span className="flex items-center justify-between gap-3">
                      What are you trying to solve?
                      <FieldMark hint="Required" />
                    </span>
                    <textarea
                      ref={messageRef}
                      required
                      name="message"
                      rows={5}
                      aria-required="true"
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={
                        fieldErrors.message ? "contact-message-error" : undefined
                      }
                      onChange={() => clearFieldError("message")}
                      className={cn(
                        "mt-2 w-full resize-y rounded-xl border bg-ink px-4 py-3 text-base text-white outline-none transition-colors focus:border-cyan/50 md:text-sm",
                        fieldErrors.message
                          ? "border-red-400/60"
                          : "border-white/10",
                      )}
                      placeholder="Mandate, systems involved, timeline, constraints…"
                    />
                    {fieldErrors.message ? (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 text-xs text-red-300"
                        role="alert"
                      >
                        {fieldErrors.message}
                      </p>
                    ) : null}
                  </label>
                  {submitState.status === "error" ? (
                    <p className="text-sm text-red-300" role="alert">
                      {submitState.message}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={submitState.status === "submitting"}
                    className={cn(
                      "inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium disabled:opacity-60 sm:w-auto",
                      contactIntentFromTopic(topic) === "assessment"
                        ? "bg-white text-ink transition-colors hover:bg-cyan hover:text-white"
                        : "cta-primary text-white",
                    )}
                  >
                    {submitState.status === "submitting"
                      ? "Submitting…"
                      : contactSubmitLabel(topic)}
                  </button>
                  <p className="text-xs text-white/35">
                    Prefer email?{" "}
                    <a
                      href="mailto:hello@inheritx.com"
                      className="text-cyan underline-offset-2 hover:underline"
                    >
                      hello@inheritx.com
                    </a>
                    . We respond to qualified inquiries within one business day.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-8">
            {calendlyUrl ? (
              <Reveal delay={0.05}>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-5 md:p-6">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar size={14} className="text-cyan" />
                    <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                      Calendar booking
                    </p>
                  </div>
                  <h3 className="font-display mt-3 text-xl text-white">
                    Book a 30-minute AI strategy call
                  </h3>
                  <p className="mt-2 text-sm text-white/45">
                    Pick a time that works for your leadership team.
                  </p>
                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-ink">
                    <iframe
                      title="Book an AI strategy call"
                      src={calendlyUrl}
                      className="h-[620px] w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={0.07}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-5 md:p-6">
                <div className="flex items-center gap-2 text-white">
                  <Shield size={14} className="text-cyan" />
                  <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                    Procurement notes
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {contactProcurementNotes.map((note) => (
                    <li
                      key={note}
                      className="flex gap-2 text-sm leading-relaxed text-white/50"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                  Channels
                </p>
                <ul className="mt-5 space-y-4">
                  {contactChannels.map((channel) => (
                    <li key={channel.title}>
                      <a
                        href={channel.href}
                        className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
                      >
                        <div className="flex items-center gap-2 text-white">
                          {channel.href.startsWith("mailto:") ? (
                            <Mail size={14} className="text-cyan" />
                          ) : (
                            <Briefcase size={14} className="text-cyan" />
                          )}
                          <span className="text-sm font-medium">
                            {channel.title}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-cyan group-hover:text-white">
                          {channel.detail}
                        </p>
                        <p className="mt-1 text-xs text-white/35">
                          {channel.note}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                  What happens next
                </p>
                <ol className="mt-5 space-y-4">
                  {contactNextSteps.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <span className="font-mono text-sm text-cyan">
                        {step.step}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm text-white/45">{step.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcurementExperience tone="dark" />

      <section className="border-t border-white/[0.06] bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Offices
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              Global delivery. Local accountability.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactOffices.map((office, index) => (
              <Reveal key={office.region} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-ink/10 bg-white p-5">
                  <MapPin size={16} className="text-cyan-deep" />
                  <h3 className="mt-4 font-medium">{office.region}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {office.address}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
