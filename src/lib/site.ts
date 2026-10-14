export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const site = {
  name: "Muhammad Kemal Nugraha",
  role: "Software Engineer",
  location: "Indonesia",
  timezone: "UTC+7",
  status: "AVAILABLE FOR NEW PROJECTS",
  tagline: "// YonKaGor Fans",
  headline:
    "Most of the time doing Backend dev works, but open to Full Stack Role. Onsite or Remote works for me.",
  email: "nugraha.kemal03@gmail.com",
  contactNote:
    "Open to freelance work and full-time roles.",
  footerNote: "Designed and Built with a bowl of Indomie",
} as const;

export const nav: NavItem[] = [
  { label: "home", href: "/" },
  { label: "experience", href: "/experience" },
  { label: "project", href: "/project" },
  { label: "contact", href: "/contact" },
];

export const socials: SocialLink[] = [
  { label: "GITHUB", href: "https://github.com/mkemaln", icon: "github" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/mkemalnugraha", icon: "linkedin" },
  { label: "EMAIL", href: "mailto:nugraha.kemal03@gmail.com", icon: "mail" },
];

export const contactLinks: SocialLink[] = [
  ...socials,
  // { label: "TWITTER / X", href: "https://x.com/yourname", icon: "github" },
  // { label: "DRIBBBLE", href: "https://dribbble.com/yourname", icon: "linkedin" },
];
