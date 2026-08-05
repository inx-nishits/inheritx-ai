import { PageHero } from "@/components/layout/PageHero";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageViewProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPageView({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: LegalPageViewProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-5 md:px-8">
          <p className="text-xs tracking-wide text-white/40">
            Last updated: {updated}
          </p>

          <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-2xl text-white md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((para) => (
                    <p
                      key={para.slice(0, 48)}
                      className="text-sm leading-relaxed text-white/60 md:text-[15px]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
