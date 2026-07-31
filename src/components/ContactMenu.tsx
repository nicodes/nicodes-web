import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";

import type { Link } from "../data/nav";

interface Props {
  links: Link[];
}

/**
 * The "Say hi" button, which opens every way of reaching me. It exists so
 * the header carries two page links instead of five items — the rest live one
 * click away rather than across the top bar.
 */
export const ContactMenu = component$<Props>(({ links }) => {
  const open = useSignal(false);
  const root = useSignal<HTMLElement>();

  useOnDocument(
    "click",
    $((event: Event) => {
      if (!open.value) return;
      const el = root.value;
      if (el && !el.contains(event.target as Node)) open.value = false;
    }),
  );

  useOnDocument(
    "keydown",
    $((event: KeyboardEvent) => {
      if (event.key === "Escape") open.value = false;
    }),
  );

  return (
    <div class="relative" ref={root}>
      <button
        type="button"
        aria-expanded={open.value}
        aria-controls="contact-menu"
        onClick$={() => (open.value = !open.value)}
        class="flex items-center gap-2 border-[3px] border-ink bg-rose px-4 py-1.5 text-lg font-bold text-paper shadow-button transition-transform hover:-translate-y-0.5 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
      >
        Say hi
        <span
          aria-hidden="true"
          class={`text-sm transition-transform ${open.value ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {open.value && (
        <div
          id="contact-menu"
          class="absolute right-0 top-full z-50 mt-3 w-60 border-[3px] border-ink bg-paper shadow-sticker"
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick$={() => (open.value = false)}
              class={`block px-4 py-3 text-lg font-bold hover:bg-gold ${
                i === 0 ? "" : "border-t-2 border-ink/15"
              }`}
            >
              {link.label}
              {link.external && <span aria-hidden="true"> ↗</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
});
