import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter(),
    alias: {
      $types: 'src/types/',
      $blocks: 'src/lib/blocks/',
      $actions: 'src/actions/',
      $utils: 'src/utils/',
      $stores: 'src/stores/',
      $icons: 'src/icons/',
    },
  },
  vitePlugin: {
    inspector: {
      toggleKeyCombo: 'meta-shift',
      holdMode: true,
      showToggleButton: 'always',
      toggleButtonPos: 'top-right',
    },
  },
};

export default config;
