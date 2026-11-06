import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://grivdm.github.io',
  base: '/bring-back-mini',
  vite: {
    plugins: [tailwindcss()],
  },
});
