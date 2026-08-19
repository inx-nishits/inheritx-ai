import {
  careerRoles,
  careersHero,
  careersIntro,
} from "@/data/pages/careers";
import { fetchCareers } from "@/lib/insights/api";
import { JobDetailModal } from "@/components/careers/JobDetailModal";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export async function CareersPageView() {
  const result = await fetchCareers();
  return (
    <>
      <PageHero
        eyebrow={careersHero.eyebrow}
        title={careersHero.title}
        description={careersHero.description}
        primaryCta={{
          label: "Apply via email",
          href: "mailto:careers@inheritx.com?subject=Careers%20at%20InheritX",
        }}
        secondaryCta={{ label: "Meet the team", href: "/team" }}
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
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

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
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

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Current openings
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Open positions.
            </h2>
          </Reveal>

          {!result.ok ? (
            <Reveal delay={0.05}>
              <p className="mt-8 text-sm text-white/50">
                Unable to load current openings. Please try again later.
              </p>
            </Reveal>
          ) : result.jobs.length === 0 ? (
            <Reveal delay={0.05}>
              <p className="mt-8 text-sm text-white/50">
                No current openings. Check back soon or{" "}
                <a
                  href="mailto:careers@inheritx.com?subject=Careers%20at%20InheritX"
                  className="text-cyan underline-offset-2 hover:underline"
                >
                  send us your résumé
                </a>
                .
              </p>
            </Reveal>
          ) : (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {result.jobs.map((job, index) => (
                <Reveal key={String(job.id)} delay={index * 0.04}>
                  <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-soft p-6 md:p-7">
                    <h3 className="font-display text-xl text-white md:text-2xl">
                      {job.title}
                    </h3>
                    {job.experience && (
                      <p className="mt-3 text-[11px] tracking-[0.18em] text-cyan uppercase">
                        {job.experience}
                      </p>
                    )}
                    {job.technologies.length > 0 && (
                      <p className="mt-3 text-sm leading-relaxed text-white/50">
                        {job.technologies.join(" \u2022 ")}
                      </p>
                    )}
                    <div className="mt-5">
                      <JobDetailModal jobId={job.id} jobTitle={job.title} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

    </>
  );
}
