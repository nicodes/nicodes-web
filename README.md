# nicodes-web

The personal site at [ni.codes](https://www.ni.codes) — a home page, the work,
and who I am.

```sh
mise install
bun install
bun run dev      # http://localhost:4321
bun run build    # -> dist/
bun run preview
```

## What is here

```
src/data/projects.ts      every project, in one place
src/layouts/Layout.astro  <head>, header, footer, the page shell
src/components/           the shared pieces; two of them are Qwik islands
src/pages/                index, work, about, 404
src/styles/global.css     the palette, the type, the printed-sticker utilities
```

## The design comes out of the portrait

`src/assets/nico.png` is a flat vector illustration: heavy outlines, no
gradients, a small palette. The site is built to match it, and every colour in
`global.css` was **sampled from that file** rather than picked to taste — ink
`#22260d`, mint `#70bfa3`, cream `#f1dfa8`, plus coral, gold, olive and rose.

The rules that follow from it:

- **Shadows are hard offsets**, never blurred (`--shadow-sticker`). Blur is a
  photographic effect and there is no photography in the artwork.
- **Borders are 3px ink**, the weight of the linework in the portrait.
- **Headings use the width axis** of Archivo Variable (`font-stretch: 118%`),
  which is what makes them read as printed lettering rather than as UI text.
- The halftone dots and the barber-pole stripes are CSS gradients, so they cost
  nothing and stay sharp on any display.

## JavaScript

The site is static. Two components ship JavaScript, both Qwik islands, and both
because they genuinely need it:

- `MobileMenu` — the small-screen nav panel.
- `WorkGrid` — the category filter, and holding each project's live demo behind
  a button. Ten iframes on load would be ten page loads the visitor never asked
  for.

Everything else is HTML and CSS.

### The rollup workaround in `astro.config.mjs`

With `@qwikdev/astro` 0.8.3 (tested against astro `^5.9.2`) on Astro 5.18,
rollup folds Astro's server internals into the shared `Layout` chunk, which
then imports the server chunk back, and the SSR entry dies on `Cannot access
'ASTRO_VERSION' before initialization`. A `manualChunks` rule keeps those
internals in a chunk of their own. Drop it and rebuild after the next
`@qwikdev/astro` release.
