from pathlib import Path

root = Path(r"c:/Projects/inheritx-ai/src")

fixes = [
    # Eyebrows → sentence case (CSS will uppercase)
    ('eyebrow: "Our Team"', 'eyebrow: "Our team"'),
    ('eyebrow: "Our Approach"', 'eyebrow: "Our approach"'),
    ('eyebrow: "Case Studies"', 'eyebrow: "Case studies"'),
    ('eyebrow: "AI Governance"', 'eyebrow: "AI governance"'),
    ('eyebrow: "AI Vision"', 'eyebrow: "AI vision"'),
    ('eyebrow: "Team members"', 'eyebrow: "Team members"'),
    # Card / section headlines → sentence case (not product names)
    (
        'title: "Architects Who Ship Production"',
        'title: "Architects who ship production"',
    ),
    (
        'title: "Systems over slides"',
        'title: "Systems over slides"',
    ),
    # Mega column label
    ('label: "AI Capabilities"', 'label: "AI capabilities"'),
    # Footer action-style link
    ('label: "AI assessment"', 'label: "AI Assessment"'),  # offering name
    # Ensure CTA consistency
    ("Browse all insights", "Browse all insights"),
    ("View all insights", "View all insights"),
    # Broken mixed case leftovers
    ("When Embedded AI Engineering is the right motion", "When Embedded AI Engineering is the right motion"),
]

# Sentence-case a few Title Case card titles that aren't proper names
card_sentence = [
    ('title: "You own the IP"', 'title: "You own the IP"'),  # IP acronym
    ('title: "Regulated reality first"', 'title: "Regulated reality first"'),
    ('title: "Measure what matters"', 'title: "Measure what matters"'),
]

changed = set()
for path in sorted(list(root.rglob("*.tsx")) + list(root.rglob("*.ts"))):
    text = path.read_text(encoding="utf-8")
    orig = text
    for a, b in fixes + card_sentence:
        if a != b:
            text = text.replace(a, b)
    if text != orig:
        path.write_text(text, encoding="utf-8", newline="\n")
        changed.add(str(path.relative_to(root.parent)).replace("\\", "/"))

print(f"FILES {len(changed)}")
for f in sorted(changed):
    print(f)
