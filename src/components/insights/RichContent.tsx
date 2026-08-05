import { prepareRichHtml } from "@/lib/insights/utils";

type RichContentProps = {
  html: string;
  className?: string;
};

export function RichContent({ html, className }: RichContentProps) {
  const content = prepareRichHtml(html);
  return (
    <div
      className={className ? `rich-content ${className}` : "rich-content"}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
