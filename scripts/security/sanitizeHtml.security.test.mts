import assert from "node:assert/strict";

import { sanitizeInsightHtml } from "../../src/lib/insights/sanitizeHtml";

function normalize(s: string) {
  return s.toLowerCase();
}

// Minimal but high-signal XSS payload suite for the WordPress HTML sanitizer.
// This is intentionally focused on executable surfaces and dangerous URL schemes.
const cases: Array<{
  name: string;
  input: string;
  asserts: (out: string) => void;
}> = [
  {
    name: "script tag removed",
    input: `<div>hello<script>alert(1)</script>world</div>`,
    asserts: (out) => {
      assert.ok(!/<script/i.test(out));
      assert.ok(!/alert\(1\)/i.test(out));
    },
  },
  {
    name: "iframe removed",
    input: `<p>before<iframe src="https://evil.com"></iframe>after</p>`,
    asserts: (out) => {
      assert.ok(!/<iframe/i.test(out));
    },
  },
  {
    name: "event handlers stripped",
    input:
      `<img src="https://example.com/x.png" onerror="alert(1)"/>` +
      `<a href="https://example.com" onclick="alert(2)">x</a>`,
    asserts: (out) => {
      const lower = normalize(out);
      assert.ok(!lower.includes("onerror="));
      assert.ok(!lower.includes("onclick="));
      assert.ok(!lower.includes("alert(1)"));
      assert.ok(!lower.includes("alert(2)"));
    },
  },
  {
    name: "javascript: href blocked (incl entity-encoded)",
    input:
      `<a href="javascript:alert(1)">x</a>` +
      `<a href="&#106;avascript:alert(2)">y</a>`,
    asserts: (out) => {
      const lower = normalize(out);
      assert.ok(!lower.includes("javascript:"));
      assert.ok(!lower.includes("alert(1)"));
      assert.ok(!lower.includes("alert(2)"));
    },
  },
  {
    name: "javascript: srcset blocked",
    input:
      `<img src="https://example.com/x.png" srcset="javascript:alert(1) 1x, https://example.com/y.png 2x" />`,
    asserts: (out) => {
      const lower = normalize(out);
      assert.ok(!lower.includes("javascript:"));
      assert.ok(!lower.includes("alert(1)"));
    },
  },
  {
    name: "svg surface discarded",
    input: `<svg><script>alert(1)</script><circle cx="5" cy="5" r="5"/></svg>`,
    asserts: (out) => {
      const lower = normalize(out);
      assert.ok(!lower.includes("<svg"));
      assert.ok(!lower.includes("script"));
      assert.ok(!lower.includes("alert(1)"));
    },
  },
];

for (const c of cases) {
  const out = sanitizeInsightHtml(c.input);
  try {
    c.asserts(out);
    // eslint-disable-next-line no-console
    console.log(`[OK] ${c.name}`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[FAIL] ${c.name}`);
    throw err;
  }
}

// eslint-disable-next-line no-console
console.log(`sanitizeHtml security suite passed (${cases.length} cases).`);

