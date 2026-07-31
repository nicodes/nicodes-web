export type Category = "tools" | "apps" | "games" | "sites";

export interface Project {
  name: string;
  url: string;
  /** Shown on the card, under the name. One line, no period. */
  tagline: string;
  blurb: string;
  category: Category;
  /** Public repository, when there is one. */
  repo?: string;
  stack: string[];
  featured?: boolean;
  /** Rotates the accent so the grid does not read as one flat colour. */
  accent: "coral" | "gold" | "rose" | "olive" | "mint-deep";
}

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "tools", label: "Tools" },
  { id: "apps", label: "Apps" },
  { id: "games", label: "Games" },
  { id: "sites", label: "Sites" },
];

export const projects: Project[] = [
  {
    name: "Ormos",
    url: "https://www.ormos.dev",
    tagline: "Your machine, from anywhere",
    blurb:
      "An agent runs on a machine you own and makes one outbound connection to a hosted relay, so a browser anywhere gets a live terminal on that machine or a local port in an iframe. It never opens a listening socket.",
    category: "tools",
    repo: "https://github.com/nicodes/ormos",
    stack: ["Go", "WebSockets", "PocketBase", "Expo"],
    featured: true,
    accent: "coral",
  },
  {
    name: "Komizo",
    url: "https://www.komizo.dev",
    tagline: "Merge, and it's live",
    blurb:
      "Deploys to your own server from GitHub Actions. A terminal interface sets the box up over SSH and gives each app its own deploy account, its own two privileged commands, and a share of one proxy.",
    category: "tools",
    repo: "https://github.com/nicodes/komizo",
    stack: ["Go", "Bubble Tea", "SSH", "Docker"],
    featured: true,
    accent: "gold",
  },
  {
    name: "ClearImg",
    url: "https://www.clearimg.ai",
    tagline: "Sprites with real transparency",
    blurb:
      "Each sprite is generated twice in one image — once over white, once over black — and reconciling that pair recovers the alpha channel. No manual cutouts, no fringing.",
    category: "apps",
    stack: ["Go", "Gin", "OpenAI", "Expo"],
    featured: true,
    accent: "rose",
  },
  {
    name: "Tone Split",
    url: "https://www.tonesplit.com",
    tagline: "A stereo synthesizer",
    blurb:
      "Stack oscillators, give each a waveform, a level and a place between hard left and hard right, then watch both channels on a scope. 93 chord voicings to start from, and no backend at all.",
    category: "apps",
    stack: ["Expo", "React Native", "Web Audio"],
    featured: true,
    accent: "mint-deep",
  },
  {
    name: "Avior Studio",
    url: "https://www.avior.studio",
    tagline: "My game studio",
    blurb:
      "The index to everything under the studio: developer tools on one side, games on the other. Every product is either linkable or explicitly marked as not.",
    category: "games",
    repo: "https://github.com/aviorstudio/aviorstudio-web",
    stack: ["Astro", "TypeScript"],
    accent: "olive",
  },
  {
    name: "termcade",
    url: "https://www.termca.de",
    tagline: "An arcade in your terminal",
    blurb:
      "Classic games drawn at sub-cell resolution with block pixels. No game is compiled in — each is a sandboxed WebAssembly package, so the starter pack and anything you write install the same way.",
    category: "games",
    repo: "https://github.com/aviorstudio/termcade",
    stack: ["Go", "Bubble Tea", "WebAssembly"],
    accent: "coral",
  },
  {
    name: "GDAM",
    url: "https://www.gdam.dev",
    tagline: "The Godot Addon Manager",
    blurb:
      "Install, link, remove and publish Godot addons from a small CLI backed by a public registry. Addons come from GitHub release assets; a local one can be linked in place while you build it.",
    category: "tools",
    repo: "https://github.com/aviorstudio/gdam",
    stack: ["Go", "Astro", "PocketBase"],
    accent: "gold",
  },
  {
    name: "gdlint",
    url: "https://www.gdlint.dev",
    tagline: "GDScript hygiene, nothing more",
    blurb:
      "Finds what quietly accumulates in a Godot project — unused signals, stray debug prints, orphaned UID files, missing return types — and deliberately stays out of your architecture.",
    category: "tools",
    repo: "https://github.com/aviorstudio/gdlint",
    stack: ["Go", "GDScript"],
    accent: "rose",
  },
  {
    name: "CT Calc",
    url: "https://www.ctcalc.com",
    tagline: "Contact time, calculated",
    blurb:
      "Works out contact time inactivation of Giardia and viruses across several disinfectants — the numbers a water operator needs to show EPA compliance.",
    category: "sites",
    repo: "https://github.com/nicodes/ctcalc",
    stack: ["Astro", "HTMX", "Python"],
    accent: "mint-deep",
  },
  {
    name: "Schlop Stop",
    url: "https://www.schlopstop.com",
    tagline: "A Boulder food truck",
    blurb:
      "Menus that the owners update from a Google Drive folder and the site picks up in real time. The logo came out of AI tooling, the rest is hand-built.",
    category: "sites",
    repo: "https://github.com/nicodes/schlopstop",
    stack: ["Astro", "Google Drive API"],
    accent: "olive",
  },
];

export const featured = projects.filter((p) => p.featured);
