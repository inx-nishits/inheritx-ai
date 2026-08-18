import { describe, expect, it } from "vitest";

import { sanitizeInsightHtml } from "./sanitizeHtml";

function normalize(s: string) {
  return s.toLowerCase();
}

describe("sanitizeInsightHtml security posture", () => {
  it("removes script tags entirely", () => {
    const input = `<div>hello<script>alert(1)</script>world</div>`;
    const out = sanitizeInsightHtml(input);
    expect(out).not.toMatch(/<script/i);
    expect(normalize(out)).not.toContain("alert(1)");
  });

  it("removes iframe tags", () => {
    const input = `<p>before<iframe src="https://evil.com"></iframe>after</p>`;
    const out = sanitizeInsightHtml(input);
    expect(out).not.toMatch(/<iframe/i);
  });

  it("strips event-handler attributes (onerror onclick) from img/a", () => {
    const input = `<img src="https://example.com/x.png" onerror="alert(1)"/>` +
      `<a href="https://example.com" onclick="alert(2)">x</a>`;
    const out = sanitizeInsightHtml(input);
    expect(normalize(out)).not.toContain("onerror=");
    expect(normalize(out)).not.toContain("onclick=");
    expect(normalize(out)).not.toContain("alert(1)");
    expect(normalize(out)).not.toContain("alert(2)");
  });

  it("blocks javascript: href protocols", () => {
    const input =
      `<a href="javascript:alert(1)">x</a>` +
      `<a href="&#106;avascript:alert(2)">y</a>`;
    const out = sanitizeInsightHtml(input);
    expect(normalize(out)).not.toContain("javascript:");
    // The payload should not preserve executable content.
    expect(normalize(out)).not.toContain("alert(1)");
    expect(normalize(out)).not.toContain("alert(2)");
  });

  it("blocks dangerous srcset schemes", () => {
    const input = `<img src="https://example.com/x.png" srcset="javascript:alert(1) 1x, https://example.com/y.png 2x" />`;
    const out = sanitizeInsightHtml(input);
    expect(normalize(out)).not.toContain("javascript:");
    expect(normalize(out)).not.toContain("alert(1)");
  });

  it("discards svg elements to avoid svg-xss surface", () => {
    const input = `<svg><script>alert(1)</script><circle cx="5" cy="5" r="5"/></svg>`;
    const out = sanitizeInsightHtml(input);
    expect(normalize(out)).not.toContain("<svg");
    expect(normalize(out)).not.toContain("script");
    expect(normalize(out)).not.toContain("alert(1)");
  });
});

