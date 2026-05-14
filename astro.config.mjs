// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://chriscarolan.com',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.endsWith('/sitemap') && !page.endsWith('/sitemap/'),
    }),
  ],
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
  security: {
    checkOrigin: false,
  },
});
