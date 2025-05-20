import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import react from '@astrojs/react';


export default defineConfig({
  site: 'https://ted0526.github.io',
  base: 'portfolio-site',
  integrations: [
	react(),
    mdx(),
    sitemap(),
    icon({
      // Tell astro-icon which sets and which glyphs you need:
      collections: {
        mdi: {
          included: ['*'],
        },
        'simple-icons': {
          included: ['*']
        }
      },
    }),
  ],
});

