"use client";

import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Globe,
  Mail,
  Phone,
  Send,
  User,
} from "lucide-react";

import {
  contactBudgetOptions,
  contactEmail,
  contactHero,
  contactOffices,
  contactSidebar,
  contactSocialLinks,
} from "@/data/pages/contact";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  readLastCtaClick,
  trackCtaFormStart,
  trackCtaFormSubmit,
} from "@/lib/cta";
import { readStoredHeroAbVariant } from "@/lib/ctaAb";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

type FieldName =
  | "name"
  | "email"
  | "country"
  | "phone"
  | "projectType"
  | "message"
  | "captcha";

type FieldErrors = Partial<Record<FieldName, string>>;

const inputClassName = cn(
  "min-h-12 w-full rounded-xl border bg-ink/70 px-4 py-3 text-base text-white outline-none transition-[border-color,box-shadow,background-color] duration-200",
  "placeholder:text-white/25",
  "border-white/10 hover:border-white/20",
  "focus:border-cyan/45 focus:bg-ink focus:shadow-[0_0_0_3px_rgba(0,190,212,0.12)]",
  "md:text-sm",
);

function FieldShell({
  label,
  hint,
  error,
  errorId,
  children,
}: {
  label: string;
  hint?: "Required" | "Optional";
  error?: string;
  errorId?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-xs tracking-wide text-white/50">
        {label}
        {hint === "Required" ? (
          <span className="ml-0.5 text-cyan" aria-hidden>
            *
          </span>
        ) : null}
        {hint === "Optional" ? (
          <span className="ml-1.5 text-[10px] tracking-normal text-white/30 normal-case">
            (optional)
          </span>
        ) : null}
      </span>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}

const IconField = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { icon: typeof User; invalid?: boolean }
>(function IconField({ icon: Icon, className, invalid, ...props }, ref) {
  return (
    <div className="relative">
      <input
        ref={ref}
        {...props}
        className={cn(inputClassName, "pr-10", invalid && "border-red-400/60", className)}
      />
      <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
        <Icon size={17} strokeWidth={1.75} className="text-white/30" aria-hidden />
      </div>
    </div>
  );
});

function FormSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">
          {title}
        </p>
        <span className="h-px flex-1 bg-white/[0.08]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

function randomCaptcha() {
  return {
    a: Math.floor(Math.random() * 8) + 1,
    b: Math.floor(Math.random() * 8) + 1,
  };
}

function validateContactForm(payload: {
  name: string;
  email: string;
  country: string;
  phone: string;
  projectType: string;
  message: string;
  captchaAnswer: string;
  captchaExpected: number;
}): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.name.trim()) errors.name = "Enter your name.";
  if (!payload.email.trim()) errors.email = "Enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  if (!payload.country.trim()) errors.country = "Enter your country.";
  if (!payload.phone.trim()) errors.phone = "Enter your phone number.";
  if (!payload.projectType.trim()) {
    errors.projectType = "Enter your project type.";
  }
  if (!payload.message.trim()) {
    errors.message = "Brief your project details.";
  }
  if (
    payload.captchaExpected <= 0 ||
    Number(payload.captchaAnswer) !== payload.captchaExpected
  ) {
    errors.captcha = "Enter the correct answer.";
  }

  return errors;
}

function missingFieldsSummary(errors: FieldErrors) {
  const labels: Record<FieldName, string> = {
    name: "Name",
    email: "Email",
    country: "Country",
    phone: "Phone",
    projectType: "Project type",
    message: "Brief your details",
    captcha: "Captcha",
  };
  const missing = (Object.keys(errors) as FieldName[]).map((key) => labels[key]);
  if (missing.length === 0) return "";
  if (missing.length === 1) return `Please complete: ${missing[0]}.`;
  if (missing.length === 2) {
    return `Please complete: ${missing[0]} and ${missing[1]}.`;
  }
  return `Please complete: ${missing.slice(0, -1).join(", ")}, and ${missing.at(-1)}.`;
}

function ContactSidebarCard({
  title,
  detail,
  href,
  icon: Icon,
}: {
  title: string;
  detail: string;
  href?: string;
  icon: typeof Mail;
}) {
  const inner = (
    <>
      <Icon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cyan/75" />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] tracking-[0.18em] text-white/35 uppercase">
          {title}
        </p>
        <p className="mt-1 text-sm font-medium text-white">{detail}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-cyan/30 hover:bg-white/[0.04]"
      >
        {inner}
        <ArrowRight
          size={16}
          className="ml-auto shrink-0 text-white/20 transition-transform group-hover:translate-x-0.5 group-hover:text-cyan"
          aria-hidden
        />
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      {inner}
    </div>
  );
}

function SocialIcon({
  label,
  className,
}: {
  label: (typeof contactSocialLinks)[number]["label"];
  className?: string;
}) {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
  }
}

export function ContactPageView() {
  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [captcha, setCaptcha] = useState<{ a: number; b: number }>({ a: 5, b: 5 });
  
  useEffect(() => {
    setCaptcha(randomCaptcha());
  }, []);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [requestNda, setRequestNda] = useState(false);
  const formStartTracked = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const projectTypeRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const captchaRef = useRef<HTMLInputElement>(null);

  const captchaExpected = useMemo(() => captcha.a + captcha.b, [captcha]);

  const onFormStart = () => {
    if (formStartTracked.current) return;
    formStartTracked.current = true;
    const last = readLastCtaClick();
    const variant = last?.variant ?? readStoredHeroAbVariant();
    trackCtaFormStart({
      family: "object",
      pattern: "form-destination",
      intent: "strategy",
      location: "contact.form",
      label: last?.label || "Submit",
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

  const focusFirstError = (errors: FieldErrors) => {
    const order: FieldName[] = [
      "name",
      "email",
      "country",
      "phone",
      "projectType",
      "message",
      "captcha",
    ];
    const first = order.find((field) => errors[field]);
    const refs = {
      name: nameRef,
      email: emailRef,
      country: countryRef,
      phone: phoneRef,
      projectType: projectTypeRef,
      message: messageRef,
      captcha: captchaRef,
    };
    if (first) refs[first].current?.focus();
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      country: String(data.get("country") || ""),
      phone: String(data.get("phone") || ""),
      projectType: String(data.get("projectType") || ""),
      budget: String(data.get("budget") || ""),
      message: String(data.get("message") || ""),
      requestNda,
      captchaAnswer,
      captchaExpected,
      website: String(data.get("website") || ""),
      source: "website-contact",
    };

    const errors = validateContactForm(payload);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setSubmitState({
        status: "error",
        message: missingFieldsSummary(errors),
      });
      focusFirstError(errors);
      return;
    }

    setSubmitState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          country: payload.country,
          phone: payload.phone,
          projectType: payload.projectType,
          budget: payload.budget || undefined,
          message: payload.message,
          requestNda: payload.requestNda,
          website: payload.website,
          source: payload.source,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        const apiMessage =
          result.error ||
          "Unable to submit right now. Please email contact@inheritx.com.";
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
        intent: "strategy",
        location: "contact.form",
        label: "Submit",
        href: last?.href || "/contact",
        ...(variant ? { variant } : {}),
      });
      form.reset();
      setCaptchaAnswer("");
      setRequestNda(false);
      setCaptcha(randomCaptcha());
    } catch {
      setSubmitState({
        status: "error",
        message: `Unable to submit right now. Please email ${contactEmail}.`,
      });
    }
  };

  const sidebarIcons = [Mail, Phone, Briefcase] as const;

  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        description={contactHero.description}
      />

      <section className="relative overflow-hidden bg-ink py-16 md:py-24">
        <div className="noise-overlay" />
        <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px]" />

        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] lg:items-start lg:gap-12">
            <Reveal y={0} className="min-w-0 self-start">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-elevated via-ink-soft to-ink shadow-[0_28px_90px_rgba(0,0,0,0.42)] md:rounded-[2rem]">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent"
                  aria-hidden
                />
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan/10 blur-[80px]" />

                <div className="relative p-6 md:p-9 lg:p-10">
                  <div className="mb-8 md:mb-10">
                    <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                      Project inquiry
                    </p>
                    <h2 className="font-display mt-2 text-2xl text-white md:text-3xl">
                      Tell us about your project
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/45">
                      Share the essentials below. We will review your request and
                      respond within one business day.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="flex items-start gap-4 rounded-2xl border border-cyan/30 bg-cyan/[0.08] p-6 md:p-7">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10">
                        <CheckCircle2 className="text-cyan" size={22} />
                      </div>
                      <div>
                        <p className="font-display text-xl text-white">
                          Request received
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                          Thank you for reaching out. Our team will get back to
                          you within one business day.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setSubmitState({ status: "idle" });
                            setFieldErrors({});
                            formStartTracked.current = false;
                            setCaptcha(randomCaptcha());
                          }}
                          className="mt-5 inline-flex items-center gap-2 text-sm text-cyan underline-offset-4 hover:underline"
                        >
                          Submit another request
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      ref={formRef}
                      onSubmit={onSubmit}
                      onFocusCapture={onFormStart}
                      className="space-y-8"
                      noValidate
                    >
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                      />

                      <FormSection title="Your details">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <FieldShell
                            label="Name"
                            hint="Required"
                            error={fieldErrors.name}
                            errorId="contact-name-error"
                          >
                            <IconField
                              ref={nameRef}
                              icon={User}
                              invalid={Boolean(fieldErrors.name)}
                              required
                              name="name"
                              autoComplete="name"
                              aria-required="true"
                              aria-invalid={Boolean(fieldErrors.name)}
                              aria-describedby={
                                fieldErrors.name ? "contact-name-error" : undefined
                              }
                              onChange={() => clearFieldError("name")}
                              placeholder="Your name"
                            />
                          </FieldShell>

                          <FieldShell
                            label="Email"
                            hint="Required"
                            error={fieldErrors.email}
                            errorId="contact-email-error"
                          >
                            <IconField
                              ref={emailRef}
                              icon={Mail}
                              invalid={Boolean(fieldErrors.email)}
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
                              placeholder="you@company.com"
                            />
                          </FieldShell>

                          <FieldShell
                            label="Country"
                            hint="Required"
                            error={fieldErrors.country}
                            errorId="contact-country-error"
                          >
                            <IconField
                              ref={countryRef}
                              icon={Globe}
                              invalid={Boolean(fieldErrors.country)}
                              required
                              name="country"
                              autoComplete="country-name"
                              aria-required="true"
                              aria-invalid={Boolean(fieldErrors.country)}
                              aria-describedby={
                                fieldErrors.country
                                  ? "contact-country-error"
                                  : undefined
                              }
                              onChange={() => clearFieldError("country")}
                              placeholder="Country"
                            />
                          </FieldShell>

                          <FieldShell
                            label="Phone"
                            hint="Required"
                            error={fieldErrors.phone}
                            errorId="contact-phone-error"
                          >
                            <IconField
                              ref={phoneRef}
                              icon={Phone}
                              invalid={Boolean(fieldErrors.phone)}
                              required
                              type="tel"
                              name="phone"
                              autoComplete="tel"
                              aria-required="true"
                              aria-invalid={Boolean(fieldErrors.phone)}
                              aria-describedby={
                                fieldErrors.phone ? "contact-phone-error" : undefined
                              }
                              onChange={() => clearFieldError("phone")}
                              placeholder="Phone number"
                            />
                          </FieldShell>
                        </div>
                      </FormSection>

                      <FormSection title="Project scope">
                        <div className="space-y-5">
                          <FieldShell
                            label="Project type"
                            hint="Required"
                            error={fieldErrors.projectType}
                            errorId="contact-project-type-error"
                          >
                            <input
                              ref={projectTypeRef}
                              required
                              name="projectType"
                              aria-required="true"
                              aria-invalid={Boolean(fieldErrors.projectType)}
                              aria-describedby={
                                fieldErrors.projectType
                                  ? "contact-project-type-error"
                                  : undefined
                              }
                              onChange={() => clearFieldError("projectType")}
                              className={cn(
                                inputClassName,
                                fieldErrors.projectType && "border-red-400/60",
                              )}
                              placeholder="AI agents, document AI, platform build…"
                            />
                          </FieldShell>

                          <FieldShell label="Choose budget" hint="Optional">
                            <div className="relative">
                              <select
                                name="budget"
                                defaultValue=""
                                className={cn(
                                  inputClassName,
                                  "appearance-none pr-10 text-white/45",
                                )}
                              >
                                {contactBudgetOptions.map((option) => (
                                  <option
                                    key={option.value || "placeholder"}
                                    value={option.value}
                                    className="bg-ink text-white"
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
                                <ChevronDown
                                  size={17}
                                  strokeWidth={1.75}
                                  className="text-white/30"
                                  aria-hidden
                                />
                              </div>
                            </div>
                          </FieldShell>
                        </div>
                      </FormSection>

                      <FormSection title="Brief">
                        <FieldShell
                          label="Brief your details"
                          hint="Required"
                          error={fieldErrors.message}
                          errorId="contact-message-error"
                        >
                          <textarea
                            ref={messageRef}
                            required
                            name="message"
                            rows={5}
                            aria-required="true"
                            aria-invalid={Boolean(fieldErrors.message)}
                            aria-describedby={
                              fieldErrors.message
                                ? "contact-message-error"
                                : undefined
                            }
                            onChange={() => clearFieldError("message")}
                            className={cn(
                              inputClassName,
                              "min-h-[140px] resize-y leading-relaxed",
                              fieldErrors.message && "border-red-400/60",
                            )}
                            placeholder="Goals, timeline, systems involved, and what success looks like…"
                          />
                        </FieldShell>
                      </FormSection>

                      <div className="space-y-4">
                        <FieldShell
                          label="Verification"
                          hint="Required"
                          error={fieldErrors.captcha}
                          errorId="contact-captcha-error"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-ink font-mono text-sm text-white">
                              {captcha.a}
                            </span>
                            <span className="text-white/35">+</span>
                            <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-ink font-mono text-sm text-white">
                              {captcha.b}
                            </span>
                            <span className="text-white/35">=</span>
                            <input
                              ref={captchaRef}
                              inputMode="numeric"
                              value={captchaAnswer}
                              onChange={(event) => {
                                setCaptchaAnswer(event.target.value);
                                clearFieldError("captcha");
                              }}
                              aria-invalid={Boolean(fieldErrors.captcha)}
                              aria-describedby={
                                fieldErrors.captcha
                                  ? "contact-captcha-error"
                                  : undefined
                              }
                              className={cn(
                                inputClassName,
                                "max-w-20 min-h-10 text-center font-mono",
                                fieldErrors.captcha && "border-red-400/60",
                              )}
                              placeholder="?"
                            />
                          </div>
                        </FieldShell>

                        <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-snug text-white/55">
                          <span className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center">
                            <input
                              type="checkbox"
                              checked={requestNda}
                              onChange={(event) =>
                                setRequestNda(event.target.checked)
                              }
                              className="peer sr-only"
                            />
                            <span
                              className={cn(
                                "flex size-4 items-center justify-center rounded border transition-colors",
                                "border-white/25 bg-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan",
                                "peer-checked:border-cyan peer-checked:bg-cyan",
                              )}
                              aria-hidden
                            >
                              {requestNda ? (
                                <CheckCircle2 size={12} className="text-white" />
                              ) : null}
                            </span>
                          </span>
                          <span className={cn(requestNda && "text-white/70")}>
                            Request non-disclosure agreement for a confidential
                            consultation.
                          </span>
                        </label>
                      </div>

                      {submitState.status === "error" ? (
                        <p
                          className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                          role="alert"
                        >
                          {submitState.message}
                        </p>
                      ) : null}

                      <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="submit"
                          disabled={submitState.status === "submitting"}
                          className="cta-primary group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(0,190,212,0.22)] disabled:opacity-60 sm:w-auto"
                        >
                          {submitState.status === "submitting" ? (
                            "Submitting…"
                          ) : (
                            <>
                              Submit inquiry
                              <Send
                                size={16}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </>
                          )}
                        </button>
                        <p className="text-xs text-white/35 sm:text-right">
                          Prefer email?{" "}
                          <a
                            href={`mailto:${contactEmail}`}
                            className="text-cyan underline-offset-2 hover:underline"
                          >
                            {contactEmail}
                          </a>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal y={0} className="min-w-0 self-start">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-elevated via-ink-soft to-ink shadow-[0_28px_90px_rgba(0,0,0,0.42)] md:rounded-[2rem]">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent"
                    aria-hidden
                  />
                  <div className="relative p-6 md:p-9 lg:p-10">
                    <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                      Direct contact
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      Need a faster route? Reach us directly through any channel
                      below.
                    </p>
                    <div className="mt-6 space-y-3">
                      {contactSidebar.map((item, index) => (
                        <ContactSidebarCard
                          key={item.title}
                          title={item.title}
                          detail={item.detail}
                          href={item.href}
                          icon={sidebarIcons[index] ?? Mail}
                        />
                      ))}
                    </div>

                    <div className="mt-8 border-t border-white/[0.08] pt-6">
                      <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                        Follow us
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {contactSocialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`InheritX on ${link.label}`}
                            className="flex size-10 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105 hover:bg-white/90"
                          >
                            <SocialIcon label={link.label} className="size-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            </Reveal>
          </div>

          <Reveal y={0} className="mt-12 md:mt-16">
            <div>
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                We&apos;re here!
              </p>
              <h2 className="font-display mt-2 text-2xl text-white md:text-3xl">
                Global offices
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {contactOffices.map((office) => (
                  <article
                    key={office.country}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white uppercase">
                      <span aria-hidden>{office.flag}</span>
                      {office.country}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {office.address}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
