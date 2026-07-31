export interface Link {
  href: string;
  label: string;
  external?: boolean;
}

/** The pages, which stay visible in the header bar. */
export const pages: Link[] = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

/** Everywhere else to find me, tucked behind "Say hello". */
export const contact: Link[] = [
  { href: "mailto:nicozessoules@gmail.com", label: "Email me" },
  { href: "https://github.com/nicodes", label: "GitHub", external: true },
  {
    href: "https://www.linkedin.com/in/nicozessoules",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://www.instagram.com/stonebloom",
    label: "Instagram",
    external: true,
  },
  { href: "https://www.avior.studio", label: "Avior Studio", external: true },
];
