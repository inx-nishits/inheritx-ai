"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import {
  anonymousEngagementClasses,
  diligenceLinks,
} from "@/data/enterpriseProof";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Full procurement experience for Contact (and reusable on demand pages).
 * Content relocated from the former homepage diligence band — nothing invented.
 */
export function ProcurementExperience({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <section
      id="procurement"
      aria-label="Enterprise diligence and references"
      className={
        isDark
          ? "border-t border-white/[0.06] bg-ink-soft py-16 md:py-20"
          : "border-t border-ink/10 bg-paper py-16 text-ink md:py-20"
      }
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <p
              className={
                isDark
                  ? "text-[11px] tracking-[0.24em] text-cyan uppercase"
                  : "text-[11px] tracking-[0.24em] text-cyan-deep uppercase"
              }
            >
              Diligence & references
            </p>
            <h2
              className={
                isDark
                  ? "font-display mt-3 text-2xl leading-tight text-white md:text-4xl"
                  : "font-display mt-3 text-2xl leading-tight md:text-4xl"
              }
            >
              Procurement-ready when you are.
            </h2>
            <p
              className={
                isDark
                  ? "mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base"
                  : "mt-4 max-w-xl text-sm leading-relaxed text-ink/55 md:text-base"
              }
            >
              We do not publish unverified logos or invented testimonials. What we
              can share publicly: published case methodology, anonymized
              engagement classes from those stories, and a clear NDA path for
              security review and references.
            </p>
            <div
              className={
                isDark
                  ? "mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  : "mt-6 flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4"
              }
            >
              <ShieldCheck
                className={isDark ? "mt-0.5 shrink-0 text-cyan" : "mt-0.5 shrink-0 text-cyan-deep"}
                size={18}
              />
              <p
                className={
                  isDark
                    ? "text-sm leading-relaxed text-white/55"
                    : "text-sm leading-relaxed text-ink/55"
                }
              >
                Formal SOC/ISO marks appear here only when evidenced. Until then,
                use the Security FAQ and the diligence pack under NDA—we share
                attestation status factually during vendor review.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <p
                className={
                  isDark
                    ? "text-[11px] tracking-[0.2em] text-white/35 uppercase"
                    : "text-[11px] tracking-[0.2em] text-ink/40 uppercase"
                }
              >
                Anonymized engagement classes
              </p>
              <p
                className={
                  isDark
                    ? "mt-2 text-xs text-white/40"
                    : "mt-2 text-xs text-ink/45"
                }
              >
                Derived from published case studies—not invented client names.
              </p>
              <ul className="mt-4 space-y-3">
                {anonymousEngagementClasses.map((item) => (
                  <li
                    key={item.label}
                    className={
                      isDark
                        ? "rounded-2xl border border-white/10 bg-ink/40 px-4 py-3.5"
                        : "rounded-2xl border border-ink/10 bg-white px-4 py-3.5"
                    }
                  >
                    <p
                      className={
                        isDark
                          ? "text-sm font-medium text-white"
                          : "text-sm font-medium text-ink"
                      }
                    >
                      {item.label}
                    </p>
                    <p
                      className={
                        isDark
                          ? "mt-1 text-xs leading-relaxed text-white/45"
                          : "mt-1 text-xs leading-relaxed text-ink/50"
                      }
                    >
                      {item.detail}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      {item.caseIds.map((id) => (
                        <Link
                          key={id}
                          href={`/case-studies/${id}`}
                          className={
                            isDark
                              ? "text-xs text-cyan underline-offset-2 hover:underline"
                              : "text-xs text-cyan-deep underline-offset-2 hover:underline"
                          }
                        >
                          View case →
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className={
                  isDark
                    ? "text-[11px] tracking-[0.2em] text-white/35 uppercase"
                    : "text-[11px] tracking-[0.2em] text-ink/40 uppercase"
                }
              >
                Security & procurement
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {diligenceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        isDark
                          ? "group flex min-h-14 flex-col justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-cyan/35"
                          : "group flex min-h-14 flex-col justify-center rounded-xl border border-ink/10 bg-white px-4 py-3 transition-colors hover:border-cyan-deep/40"
                      }
                    >
                      <span
                        className={
                          isDark
                            ? "inline-flex items-center gap-1.5 text-sm text-white group-hover:text-cyan"
                            : "inline-flex items-center gap-1.5 text-sm text-ink group-hover:text-cyan-deep"
                        }
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </span>
                      <span
                        className={
                          isDark
                            ? "mt-0.5 text-[11px] text-white/40"
                            : "mt-0.5 text-[11px] text-ink/45"
                        }
                      >
                        {link.note}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p
                className={
                  isDark
                    ? "mt-4 text-xs leading-relaxed text-white/40"
                    : "mt-4 text-xs leading-relaxed text-ink/45"
                }
              >
                Named customer references: only with written approval. Otherwise
                anonymized industry + scale references under NDA for qualified
                opportunities. See also{" "}
                <Link
                  href="/resources/enterprise-references"
                  className={
                    isDark
                      ? "text-cyan underline-offset-2 hover:underline"
                      : "text-cyan-deep underline-offset-2 hover:underline"
                  }
                >
                  enterprise references
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
