// @ts-check
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import swc from '@vitejs/plugin-react-swc';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  adapter: node({
    mode: 'middleware',
  }),
  output: 'server',
  vite: {
    plugins: [swc()],
  },
});
