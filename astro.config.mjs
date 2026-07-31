// @ts-check
import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ni.codes',

  integrations: [qwikdev()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          // With the Qwik integration, rollup folds Astro's server internals
          // into the shared Layout chunk, which then imports the server chunk
          // back: the SSR entry dies on `Cannot access 'ASTRO_VERSION' before
          // initialization`. Keeping those internals in one chunk of their own
          // breaks the cycle. Retry the build without this after upgrading
          // @qwikdev/astro (0.8.3 is tested against astro ^5.9.2, not 5.18).
          manualChunks(id) {
            if (id.includes('node_modules/astro/dist')) return 'astro-internals';
          }
        }
      }
    }
  }
});
