// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://webby-box.github.io',
  base: '/ricky-portfolio',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
