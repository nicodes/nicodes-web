import { component$, useSignal } from "@builder.io/qwik";

interface Props {
  url: string;
  name: string;
  /** The panel takes the colour the row is not, so it never sits on itself. */
  panel: "bg-mint" | "bg-cream";
}

/** Strips the scheme so the address bar reads like a real one. */
const pretty = (url: string) => url.replace(/^https?:\/\//, "");

/**
 * One project's live site, framed like a browser window. It holds the iframe
 * back until it is asked for: ten of these loading on arrival would be ten
 * page loads the visitor never requested. That hold is the only reason this
 * is an island rather than markup.
 */
export const DemoFrame = component$<Props>(({ url, name, panel }) => {
  const loaded = useSignal(false);

  return (
    <div class="border-[3px] border-ink shadow-sticker">
      <div class={`relative aspect-[16/10] ${panel}`}>
        <div class="halftone pointer-events-none absolute inset-0" />

        {loaded.value ? (
          <iframe
            src={url}
            title={`Live demo of ${name}`}
            loading="lazy"
            class="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick$={() => (loaded.value = true)}
            class="group absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <span class="border-[3px] border-ink bg-rose px-5 py-2.5 text-lg font-extrabold text-paper shadow-button transition-transform group-hover:-translate-y-1">
              ▶ Load live demo
            </span>
            <span class="text-sm font-semibold text-ink-soft">
              loads {pretty(url)} in place
            </span>
          </button>
        )}
      </div>
    </div>
  );
});
