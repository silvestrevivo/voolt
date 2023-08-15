import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import type { PluginOption } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), svg({ type: 'component' }) as PluginOption],
  server: {
    host: true,
  },
});
