import { component$, useSignal, useStore } from "@builder.io/qwik";

import type { Category, Project } from "../data/projects";

interface Props {
  projects: Project[];
  categories: { id: Category | "all"; label: string }[];
}

const accentClass: Record<Project["accent"], string> = {
  coral: "bg-coral",
  gold: "bg-gold",
  rose: "bg-rose",
  olive: "bg-olive",
  "mint-deep": "bg-mint-deep",
};

/** Strips the scheme so the fake address bar reads like a real one. */
const pretty = (url: string) => url.replace(/^https?:\/\//, "");

/**
 * The work grid. Two things here need JavaScript and nothing else does: the
 * category filter, and holding a demo back until it is asked for. Ten live
 * iframes on load would cost the visitor ten page loads they did not request.
 */
export const WorkGrid = component$<Props>(({ projects, categories }) => {
  const active = useSignal<Category | "all">("all");
  const loaded = useStore<Record<string, boolean>>({});

  const shown =
    active.value === "all"
      ? projects
      : projects.filter((p) => p.category === active.value);

  return (
    <div>
      <div class="flex flex-wrap items-center gap-3" role="group" aria-label="Filter projects">
        {categories.map((category) => {
          const isActive = active.value === category.id;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isActive}
              onClick$={() => (active.value = category.id)}
              class={[
                "border-[3px] border-ink px-4 py-2 text-lg font-extrabold transition-transform",
                isActive
                  ? "bg-ink text-paper shadow-none"
                  : "bg-paper shadow-[4px_4px_0_var(--color-ink)] hover:-translate-y-0.5",
              ].join(" ")}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <p class="mt-4 text-ink-soft" aria-live="polite">
        Showing {shown.length} of {projects.length} projects.
      </p>

      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        {shown.map((project) => (
          <article
            key={project.name}
            class="flex flex-col border-[3px] border-ink bg-paper shadow-sticker"
          >
            <div
              class={`${accentClass[project.accent]} flex items-baseline justify-between gap-3 border-b-[3px] border-ink px-5 py-4`}
            >
              <h2 class="text-3xl">{project.name}</h2>
              <span class="text-sm font-bold uppercase tracking-widest">
                {project.category}
              </span>
            </div>

            {/* Browser chrome, then the demo it frames. */}
            <div class="border-b-[3px] border-ink">
              <div class="flex items-center gap-2 border-b-[3px] border-ink bg-cream px-3 py-2">
                <span class="h-3 w-3 rounded-full border-2 border-ink bg-rose" />
                <span class="h-3 w-3 rounded-full border-2 border-ink bg-gold" />
                <span class="h-3 w-3 rounded-full border-2 border-ink bg-mint-deep" />
                <span class="ml-2 truncate text-sm font-semibold text-ink-soft">
                  {pretty(project.url)}
                </span>
              </div>

              <div class="relative aspect-[16/10] bg-mint">
                <div class="halftone pointer-events-none absolute inset-0" />

                {loaded[project.name] ? (
                  <iframe
                    src={project.url}
                    title={`Live demo of ${project.name}`}
                    loading="lazy"
                    class="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick$={() => (loaded[project.name] = true)}
                    class="group absolute inset-0 flex flex-col items-center justify-center gap-3"
                  >
                    <span class="border-[3px] border-ink bg-paper px-5 py-2.5 text-lg font-extrabold shadow-sticker transition-transform group-hover:-translate-y-1">
                      ▶ Load live demo
                    </span>
                    <span class="text-sm font-semibold text-ink-soft">
                      loads {pretty(project.url)} in place
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div class="flex flex-1 flex-col p-5">
              <p class="text-lg font-bold">{project.tagline}</p>
              <p class="mt-2 text-ink-soft">{project.blurb}</p>

              <ul class="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    class="border-2 border-ink px-2 py-0.5 text-sm font-semibold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div class="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="border-[3px] border-ink bg-ink px-4 py-2 font-extrabold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Visit ↗
                </a>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="border-[3px] border-ink px-4 py-2 font-extrabold transition-transform hover:-translate-y-0.5 hover:bg-gold"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});
