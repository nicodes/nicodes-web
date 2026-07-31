import { component$, useSignal, useStyles$ } from "@builder.io/qwik";

import type { Link } from "../data/nav";

interface Props {
  pages: Link[];
  contact: Link[];
}

/**
 * The small-screen menu. The desktop nav is plain markup in Header.astro —
 * this island exists only because a panel that opens and closes needs a
 * handler. It carries the contact links inline rather than behind a second
 * dropdown, because there is no header space to save on a phone.
 */
export const MobileMenu = component$<Props>(({ pages, contact }) => {
  const open = useSignal(false);

  useStyles$(`
    .menu-panel { animation: menu-in 0.18s ease-out; }
    @keyframes menu-in {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .menu-panel { animation: none; }
    }
  `);

  return (
    <div class="md:hidden">
      <button
        type="button"
        aria-expanded={open.value}
        aria-controls="mobile-menu"
        aria-label={open.value ? "Close menu" : "Open menu"}
        onClick$={() => (open.value = !open.value)}
        class="flex h-11 w-11 items-center justify-center border-[3px] border-ink bg-gold shadow-[4px_4px_0_var(--color-ink)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--color-ink)]"
      >
        <span class="sr-only">Menu</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          aria-hidden="true"
          fill="none"
          stroke="var(--color-ink)"
          stroke-width="3"
          stroke-linecap="round"
        >
          {open.value ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </>
          )}
        </svg>
      </button>

      {open.value && (
        <div
          id="mobile-menu"
          class="menu-panel absolute left-0 right-0 top-full z-40 border-y-[3px] border-ink bg-paper"
        >
          <nav class="flex flex-col">
            {pages.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick$={() => (open.value = false)}
                class="border-b-2 border-ink/15 px-5 py-4 text-2xl font-extrabold [font-stretch:118%] hover:text-coral"
              >
                {link.label}
              </a>
            ))}

            <p class="bg-cream px-5 py-2 text-sm font-extrabold uppercase tracking-[0.16em]">
              Say hello
            </p>

            {contact.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick$={() => (open.value = false)}
                class="border-b-2 border-ink/15 px-5 py-3.5 text-lg font-bold hover:text-coral"
              >
                {link.label}
                {link.external && <span aria-hidden="true"> ↗</span>}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
});
