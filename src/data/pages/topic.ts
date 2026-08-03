export type TopicLink = { label: string; href: string };

export type TopicSection =
  | { type: "proof"; items: { value: string; label: string }[] }
  | { type: "narrative"; title: string; body: string[] }
  | {
      type: "bullets";
      title: string;
      intro?: string;
      items: { title: string; copy: string }[];
    }
  | {
      type: "steps";
      title: string;
      intro?: string;
      items: { step: string; title: string; copy: string }[];
    }
  | {
      type: "split";
      title: string;
      leftTitle: string;
      leftBody: string[];
      rightTitle: string;
      rightItems: string[];
    }
  | {
      type: "matrix";
      title: string;
      intro?: string;
      rows: { need: string; approach: string }[];
    }
  | { type: "related"; title: string; links: TopicLink[] }
  | { type: "faq"; title: string; items: { q: string; a: string }[] };

export type TopicLayout =
  | "capability"
  | "engagement"
  | "industry"
  | "narrative"
  | "library";

export type TopicPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: TopicLink;
  secondaryCta?: TopicLink;
  layout: TopicLayout;
  sections: TopicSection[];
  metadata: { title: string; description: string };
  image?: string;
};
