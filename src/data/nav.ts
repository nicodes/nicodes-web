export interface Link {
  href: string;
  label: string;
  external?: boolean;
}

/**
 * The pages, which stay visible in the header bar.
 *
 * About is off the site for now. The page itself is intact at
 * `src/pages/_about.astro` — the underscore is what keeps Astro from
 * routing it. Putting it back is a rename and this line:
 *   { href: "/about", label: "About" },
 */
export const pages: Link[] = [
  { href: "/consulting", label: "Consulting" },
  { href: "/portfolio", label: "Portfolio" },
];

/** Everywhere else to find me, tucked behind "Say hi". */
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
