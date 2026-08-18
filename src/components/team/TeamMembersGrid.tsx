"use client";

import Image from "next/image";

import {
  featuredTeamMembers,
  gridTeamMembers,
  practiceDisciplines,
  teamMembersIntro,
  type TeamMember,
} from "@/data/pages/team";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TeamPhoneCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const initials = getInitials(member.name);

  return (
    <Reveal
      delay={index * 0.06}
      className={cn("h-full w-full", index % 2 === 0 && "lg:mt-8")}
    >
      <article className="team-member-frame group relative mx-auto flex h-full w-full max-w-[240px] flex-col overflow-hidden rounded-[2rem] p-[1.5px] sm:max-w-[260px]">
        <span aria-hidden className="team-member-border" />
        <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[calc(2rem-1.5px)] bg-[#0c1118] shadow-[0_20px_48px_rgba(0,0,0,0.4)]">
          <div className="p-2 pb-0 md:p-2.5 md:pb-0">
            <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#0a1018] sm:aspect-square">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="260px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,190,212,0.16),transparent_55%),linear-gradient(160deg,#0b1220_0%,#121a2a_55%,#0a1018_100%)]">
                  <span className="font-display text-4xl text-cyan/75">
                    {initials}
                  </span>
                </div>
              )}

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#0a1018] to-transparent"
              />

              <div
                aria-hidden
                className="absolute top-2 left-1/2 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-black/85"
              />

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute top-2 right-2 z-20 inline-flex size-8 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur-md transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <LinkedInIcon className="size-3" />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col px-3.5 pt-3.5 pb-3 md:px-4 md:pt-4 md:pb-3">
            {member.department ? (
              <p className="text-[10px] tracking-[0.18em] text-cyan/85 uppercase">
                {member.department}
              </p>
            ) : null}
            <h3 className="font-display mt-1 text-lg leading-tight text-white md:text-xl">
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-cyan">{member.role}</p>
          </div>

          <div
            aria-hidden
            className="mt-auto flex justify-center pb-3 pt-1 md:pb-3.5"
          >
            <span className="h-1 w-16 rounded-full bg-white/35" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function TeamMembersGrid() {
  return (
    <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            {teamMembersIntro.eyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
            {teamMembersIntro.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50">
            {teamMembersIntro.description}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {featuredTeamMembers.map((member, index) => (
            <TeamPhoneCard key={member.id} member={member} index={index} />
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Practice disciplines
            </p>
            <h3 className="font-display mt-3 max-w-xl text-2xl text-white md:text-3xl">
              Where our AI delivery capability concentrates.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45">
              Named specialist profiles for these practices will be published here.
              Until then, this is the capability map leaders engage.
            </p>
          </Reveal>

          {gridTeamMembers.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
              {gridTeamMembers.map((member, index) => (
                <TeamPhoneCard key={member.id} member={member} index={index} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {practiceDisciplines.map((item, index) => (
                <Reveal key={item.title} delay={(index % 3) * 0.05}>
                  <article className="h-full rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-cyan/25">
                    <p className="font-mono text-xs text-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="font-display mt-3 text-xl text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
