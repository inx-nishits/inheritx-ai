"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

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

function Portrait({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  const initials = getInitials(member.name);

  return (
    <div className={cn("relative overflow-hidden bg-ink-soft", className)}>
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,190,212,0.16),transparent_55%),linear-gradient(160deg,#0b1220_0%,#121a2a_55%,#0a1018_100%)]">
          <span className="font-display text-4xl text-cyan/75 md:text-5xl">
            {initials}
          </span>
          <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function FeaturedMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <article className="group flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
          <Portrait member={member} className="aspect-[4/5]" />

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-ink/55 text-white/70 opacity-100 backdrop-blur-md transition-all duration-500 hover:border-cyan/40 hover:text-cyan md:size-9 md:opacity-0 md:group-hover:opacity-100"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
          )}
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl leading-tight text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-cyan">{member.role}</p>
            </div>
            {member.bio && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Hide introduction" : "Show introduction"}
                className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/55 transition-colors hover:border-cyan/35 hover:text-cyan"
              >
                {open ? <Minus size={14} /> : <Plus size={14} />}
              </button>
            )}
          </div>

          {member.bio && (
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-white/50">
                {member.bio}
              </p>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function GridMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <Reveal delay={(index % 4) * 0.04} className="h-full">
      <article className="group flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.02] transition-colors duration-500 group-hover:border-cyan/25">
          <Portrait member={member} className="aspect-[3/4]" />

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-ink/55 text-white/70 opacity-100 backdrop-blur-md transition-all duration-500 hover:border-cyan/40 hover:text-cyan md:size-8 md:opacity-0 md:group-hover:opacity-100"
            >
              <LinkedInIcon className="size-3" />
            </a>
          )}
        </div>

        <div className="mt-4 px-0.5">
          <h3 className="font-display text-xl leading-tight text-white transition-colors duration-500 group-hover:text-cyan">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-white/45">{member.role}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function TeamMembersGrid() {
  return (
    <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
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

        {/* Featured leaders — larger portraits with expandable intros */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredTeamMembers.map((member, index) => (
            <FeaturedMemberCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>

        {/* Practice disciplines — real named specialists will replace this roster */}
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
            <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6 md:gap-y-12">
              {gridTeamMembers.map((member, index) => (
                <GridMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                />
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
