"use client";

import { useState, type FormEvent } from "react";
import { Briefcase, CheckCircle2, Mail, MapPin } from "lucide-react";

import {
  contactChannels,
  contactHero,
  contactNextSteps,
  contactOffices,
  contactTopics,
} from "@/data/pages/contact";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ContactPageView() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState(contactTopics[0]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`[InheritX] ${topic} — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTopic: ${topic}\n\n${message}`,
    );
    window.location.href = `mailto:hello@inheritx.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        description={contactHero.description}
      />

      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 md:px-8">
          <Reveal>
            <div className="rounded-[1.75rem] border border-white/10 bg-ink-soft p-6 md:p-8">
              <h2 className="font-display text-2xl text-white md:text-3xl">
                Request an AI consultation
              </h2>
              <p className="mt-2 text-sm text-white/45">
                Include mandate, systems in scope, constraints, and whether you
                need consulting, a production build, a squad, or embeds. We’ll
                respond with next steps—usually within one business day.
              </p>

              {submitted ? (
                <div className="mt-10 flex items-start gap-3 rounded-2xl border border-cyan/30 bg-cyan/10 p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={20} />
                  <div>
                    <p className="font-medium text-white">Mail client opening</p>
                    <p className="mt-1 text-sm text-white/55">
                      If it doesn’t open, email hello@inheritx.com directly with
                      your brief.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-xs tracking-wide text-white/40">
                      Name
                      <input
                        required
                        name="name"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-cyan/50 md:py-3 md:text-sm"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block text-xs tracking-wide text-white/40">
                      Work email
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-cyan/50 md:py-3 md:text-sm"
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label className="block text-xs tracking-wide text-white/40">
                    Company
                    <input
                      name="company"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-cyan/50 md:py-3 md:text-sm"
                      placeholder="Organization"
                    />
                  </label>
                  <div>
                    <p className="text-xs tracking-wide text-white/40">Topic</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {contactTopics.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTopic(item)}
                          className={cn(
                            "min-h-11 rounded-full border px-4 py-2.5 text-sm transition-all",
                            topic === item
                              ? "border-cyan/40 bg-cyan/15 text-cyan"
                              : "border-white/10 text-white/45 hover:text-white/75",
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="block text-xs tracking-wide text-white/40">
                    What are you trying to solve?
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-ink px-4 py-3 text-base text-white outline-none transition-colors focus:border-cyan/50 md:text-sm"
                      placeholder="Mandate, systems involved, timeline, constraints…"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink sm:w-auto"
                  >
                    Continue via email
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
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

      <section className="border-t border-white/[0.06] bg-paper py-20 text-ink md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
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
