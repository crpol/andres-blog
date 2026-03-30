import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://andres.crp.gi',
  // Cloudflare Pages project: andres-blog
  // Fallback URL: andres-blog.pages.dev
  output: 'static',
  build: {
    format: 'directory',
  },
});
