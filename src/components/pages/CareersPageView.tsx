import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  careerRoles,
  careersFaqs,
  careersHero,
  careersHowToApply,
  careersIntro,
} from "@/data/pages/careers";
import { PageHero } from "@/components/layout/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export function CareersPageView() {
  return (
    <>
      <PageHero
        eyebrow={careersHero.eyebrow}
        title={careersHero.title}
        description={careersHero.description}
        primaryCta={{
          label: "Apply via email",
          href: "mailto:hello@inheritx.com?subject=Careers%20at%20InheritX",
        }}
        secondaryCta={{ label: "Meet the team", href: "/team" }}
      />

      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Culture of craft
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-4xl">
              {careersIntro.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              {careersIntro.copy}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Disciplines we hire
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Roles that ship production AI.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {careerRoles.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.04}>
                <article className="h-full rounded-[1.5rem] border border-white/10 bg-ink p-6 md:p-7">
                  <h3 className="font-display text-xl text-white md:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {role.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Process
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              {careersHowToApply.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {careersHowToApply.steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[11px] tracking-[0.2em] text-cyan">
                    {item.step}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="mailto:hello@inheritx.com?subject=Careers%20at%20InheritX"
                className="bg-cyan px-6 py-3 text-white hover:bg-white hover:text-ink"
              >
                Email careers
              </MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm text-white/55 hover:text-white"
              >
                Prefer the contact form
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Common questions.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {careersFaqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="text-base font-medium text-white md:text-lg">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
