import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    icon({
      // Tell astro-icon which sets and which glyphs you need:
      collections: {
        mdi: {
          included: ['linkedin', 'youtube', 'github'],
        },
      },
    }),
  ],
});

