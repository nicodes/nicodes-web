import { component$, useSignal } from "@builder.io/qwik";

interface Props {
  url: string;
  name: string;
}

/** Strips the scheme so the address bar reads like a real one. */
const pretty = (url: string) => url.replace(/^https?:\/\//, "");

/**
 * One project's live site, framed like a browser window. It holds the iframe
 * back until it is asked for: ten of these loading on arrival would be ten
 * page loads the visitor never requested. That hold is the only reason this
 * is an island rather than markup.
 */
export const DemoFrame = component$<Props>(({ url, name }) => {
  const loaded = useSignal(false);

  return (
    <div class="border-[3px] border-ink shadow-sticker">
      <div class="flex items-center gap-2 border-b-[3px] border-ink bg-paper px-3 py-2">
        <span class="h-3 w-3 rounded-full border-2 border-ink bg-rose" />
        <span class="h-3 w-3 rounded-full border-2 border-ink bg-gold" />
        <span class="h-3 w-3 rounded-full border-2 border-ink bg-mint-deep" />
        <span class="ml-2 truncate text-sm font-semibold text-ink-soft">
          {pretty(url)}
        </span>
      </div>

      <div class="relative aspect-[16/10] bg-mint">
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
            <span class="border-[3px] border-ink bg-paper px-5 py-2.5 text-lg font-extrabold shadow-sticker transition-transform group-hover:-translate-y-1">
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
