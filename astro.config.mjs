import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',  // Change from 'hybrid' to 'server'
  adapter: cloudflare(),
});