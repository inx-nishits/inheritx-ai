export const contactHero = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Share your project details and we will respond within one business day.",
};

export const contactEmail = "contact@inheritx.com";

export const contactBudgetOptions = [
  { value: "", label: "Choose budget" },
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-plus", label: "$250,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const contactSidebar = [
  {
    title: "Email us",
    detail: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    title: "Sales inquiries",
    detail: "+91 8487006480",
    href: "tel:+918487006480",
  },
  {
    title: "Career inquiries",
    detail: "+91 8160047106",
    href: "tel:+918160047106",
  },
] as const;

export const contactOffices = [
  {
    country: "India",
    flag: "🇮🇳",
    address:
      "8th Floor, Panchdhara Complex, S G Highway, Bodakdev, Ahmedabad - 380054, India",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    address: "222 Broadway, New York, NY 10038, United States",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    address: "Kloster 3, 79713 Bad Säckingen, Germany",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    address: "1-36-13 Hashiba, Taito-ku, Tokyo, Japan",
  },
] as const;

export const contactSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/InheritxSolutions/",
  },
  {
    label: "X",
    href: "https://x.com/inheritx",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/inheritx-solutions/home/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/inheritxsolutions/",
  },
] as const;
