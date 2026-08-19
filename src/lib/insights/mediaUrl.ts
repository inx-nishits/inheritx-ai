/** Prefer the original WP upload over a resized derivative (`-1500x1000.webp`). */
export function wpOriginalImageUrl(src: string): string {
  return src.replace(
    /-\d+x\d+(?=\.(?:jpe?g|png|gif|webp|avif)(?:\?|$))/i,
    "",
  );
}

export function mediaFileKey(src: string): string {
  const original = wpOriginalImageUrl(src.trim());
  try {
    const path = new URL(original).pathname;
    return decodeURIComponent(path.split("/").pop() ?? path).toLowerCase();
  } catch {
    const file = original.split("/").pop() ?? original;
    return file.toLowerCase();
  }
}

/**
 * WordPress often repeats the featured image as the first content block.
 * Drop that lead image so the page hero is the only copy.
 */
export function stripLeadingDuplicateFeatureImage(
  html: string,
  featureSrc?: string | null,
): string {
  if (!html || !featureSrc) return html;
  const featureKey = mediaFileKey(featureSrc);
  if (!featureKey) return html;

  const firstImg = html.match(/<img\b[^>]*>/i);
  if (!firstImg || firstImg.index == null) return html;

  const src =
    firstImg[0].match(/\bsrc=["']([^"']+)["']/i)?.[1] ||
    firstImg[0].match(/\bsrcset=["']([^"'\s,]+)/i)?.[1];
  if (!src || mediaFileKey(src) !== featureKey) return html;

  const prefix = html.slice(0, firstImg.index);
  if (!/^(?:\s|<!--[\s\S]*?-->)*$/.test(prefix)) return html;

  return html
    .replace(
      /^(?:\s|<!--[\s\S]*?-->)*((?:<!--\s*wp:image\b[\s\S]*?-->)?\s*(?:<figure\b[^>]*>[\s\S]*?<\/figure>|<p\b[^>]*>\s*<img\b[^>]*>\s*<\/p>|<img\b[^>]*>)\s*(?:<!--\s*\/wp:image\s*-->)?)/i,
      "",
    )
    .trim();
}
