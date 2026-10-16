// @ts-check
import { defineConfig } from 'astro/config';

// Sajt se objavljuje na GitHub Pages: https://tvojvajbkod.github.io/zubari/
export default defineConfig({
  site: 'https://tvojvajbkod.github.io',
  base: '/zubari',
  // Srpski je glavni jezik (bez /sr u adresi), engleski je pod /en/
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
