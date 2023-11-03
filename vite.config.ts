// import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component(),
    UnoCSS({
      configFile: '../uno.config.ts',
    }),
  ],
});

// resolve: {
//   alias: {
//     '@': fileURLToPath(new URL('./src', import.meta.url)),
//   },
// },
