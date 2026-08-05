from pathlib import Path

root = Path(r"c:/Projects/inheritx-ai/src")

product_fixes = [
    ("Computer vision Quality Line", "Computer Vision Quality Line"),
    ("Enterprise Computer vision", "Enterprise Computer Vision"),
    ("Computer vision FAQ", "Computer Vision FAQ"),
    ("Computer vision solutions", "Computer Vision solutions"),
    ("Computer vision", "Computer Vision"),
    ("Multi-agent systems", "Multi-Agent Systems"),
    ("Multi-agent Systems", "Multi-Agent Systems"),
    ("AI agents & Multi-Agent", "AI Agents & Multi-Agent"),
    ("Dedicated AI squads", "Dedicated AI Squads"),
    ("Embedded AI engineering", "Embedded AI Engineering"),
    ("AI Platform engineering", "AI Platform Engineering"),
    ("AI platform engineering", "AI Platform Engineering"),
    ("AI transformation Blueprint", "AI Transformation Blueprint"),
]

nav_label_fixes = [
    ('label: "Case studies"', 'label: "Case Studies"'),
    ('title: "Case studies"', 'title: "Case Studies"'),
    ('label: "AI agents"', 'label: "AI Agents"'),
    ('title: "AI agents"', 'title: "AI Agents"'),
    ('label: "AI automation"', 'label: "AI Automation"'),
    ('title: "AI automation"', 'title: "AI Automation"'),
    ('label: "AI transformation"', 'label: "AI Transformation"'),
    ('title: "AI transformation"', 'title: "AI Transformation"'),
    ('label: "AI consulting"', 'label: "AI Consulting"'),
    ('title: "AI consulting"', 'title: "AI Consulting"'),
    ('label: "AI portfolio"', 'label: "AI Portfolio"'),
    ('title: "AI portfolio"', 'title: "AI Portfolio"'),
    ('label: "AI governance"', 'label: "AI Governance"'),
    ('title: "AI governance"', 'title: "AI Governance"'),
    ('label: "Our team"', 'label: "Our Team"'),
    ('title: "Our team"', 'title: "Our Team"'),
    ('label: "Enterprise references"', 'label: "Enterprise References"'),
    ('title: "Enterprise references"', 'title: "Enterprise References"'),
    ('label: "IP ownership"', 'label: "IP Ownership"'),
    ('title: "IP ownership"', 'title: "IP Ownership"'),
    ('label: "Culture & values"', 'label: "Culture & Values"'),
    ('title: "Culture & values"', 'title: "Culture & Values"'),
    ('label: "Our AI vision"', 'label: "Our AI Vision"'),
    ('title: "Our AI vision"', 'title: "Our AI Vision"'),
    ('label: "Our approach"', 'label: "Our Approach"'),
    ('title: "Our approach"', 'title: "Our Approach"'),
    ('label: "Security & compliance"', 'label: "Security & Compliance"'),
    ('title: "Security & compliance"', 'title: "Security & Compliance"'),
    # Restore nav product titles used as title: in mega items
    ('title: "AI Agents"', 'title: "AI Agents"'),
]

# Mega menu / content titles that are product names (not CTAs)
product_title_fields = [
    ('title: "AI agents"', 'title: "AI Agents"'),
    ('title: "AI automation"', 'title: "AI Automation"'),
    ('title: "AI transformation"', 'title: "AI Transformation"'),
    ('title: "AI consulting"', 'title: "AI Consulting"'),
    ('title: "Dedicated AI Squads"', 'title: "Dedicated AI Squads"'),
    ('title: "Embedded AI Engineering"', 'title: "Embedded AI Engineering"'),
    ('title: "Computer Vision"', 'title: "Computer Vision"'),
    ('title: "AI Portfolio"', 'title: "AI Portfolio"'),
    ('title: "All insights"', 'title: "All Insights"'),  # nav item under Insights
]

eyebrow_sentence = [
    ("Team Members", "Team members"),
    ("Engagement Models", "Engagement models"),
    ("Production Readiness", "Production readiness"),
    ("Architecture Principles", "Architecture principles"),
    ("Outcome Taxonomy", "Outcome taxonomy"),
    ("Case studies Library", "Case studies library"),
    ("Enterprise Diligence pack", "Enterprise diligence pack"),
    ('eyebrow: "AI Vision"', 'eyebrow: "AI vision"'),
    ('eyebrow: "Why InheritX"', 'eyebrow: "Why InheritX"'),  # brand keep
    ('eyebrow: "Engagement models"', 'eyebrow: "Engagement models"'),
    ('eyebrow: "Production readiness"', 'eyebrow: "Production readiness"'),
    ('eyebrow: "Architecture principles"', 'eyebrow: "Architecture principles"'),
    ('eyebrow: "Computer Vision"', 'eyebrow: "Computer Vision"'),  # product name OK as eyebrow
]

cta_sentence = [
    ("View Case Studies", "View case studies"),
    ("Browse Case Studies", "Browse case studies"),
    ("Read Case Studies", "Read case studies"),
    ("Review Case Studies", "Review case studies"),
    ("Explore agentic AI", "Explore Agentic AI"),
    ("Book an AI Strategy Call", "Book an AI strategy call"),
    ("Request AI Assessment", "Request AI assessment"),
    ("Back to Insights", "Back to insights"),
    ("All Insights", "All Insights"),  # keep if nav; CTAs use Browse all insights
    ("Browse All Insights", "Browse all insights"),
    ("Browse all Insights", "Browse all insights"),
]

# Icon map key updates after renames
icon_map_fixes = [
    ('"AI agents"', '"AI Agents"'),
    ('"AI automation"', '"AI Automation"'),
    ('"AI consulting"', '"AI Consulting"'),
    ('"AI transformation"', '"AI Transformation"'),
    ('"Computer vision"', '"Computer Vision"'),
    ('"Dedicated AI squads"', '"Dedicated AI Squads"'),
    ('"Embedded AI engineering"', '"Embedded AI Engineering"'),
    ('"AI portfolio"', '"AI Portfolio"'),
    ('"Case studies"', '"Case Studies"'),
    ('"Our team"', '"Our Team"'),
    ('"Our AI vision"', '"Our AI Vision"'),
    ('"Our approach"', '"Our Approach"'),
    ('"Security & compliance"', '"Security & Compliance"'),
    ('"IP ownership"', '"IP Ownership"'),
    ('"Culture & values"', '"Culture & Values"'),
    ('"AI governance"', '"AI Governance"'),
    ('"Enterprise references"', '"Enterprise References"'),
    ('"All insights"', '"All Insights"'),
]

changed: dict[str, bool] = {}

for path in sorted(list(root.rglob("*.tsx")) + list(root.rglob("*.ts"))):
    text = path.read_text(encoding="utf-8")
    orig = text
    for a, b in (
        product_fixes
        + nav_label_fixes
        + product_title_fields
        + eyebrow_sentence
        + cta_sentence
        + icon_map_fixes
    ):
        if a != b:
            text = text.replace(a, b)
    if text != orig:
        rel = str(path.relative_to(root.parent)).replace("\\", "/")
        changed[rel] = True
        path.write_text(text, encoding="utf-8", newline="\n")

print(f"FILES {len(changed)}")
for f in sorted(changed):
    print(f)
