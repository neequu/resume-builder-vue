// import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetIcons, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component(),
    AutoImport({ imports: ['vue'] }),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
});

// resolve: {
//   alias: {
//     '@': fileURLToPath(new URL('./src', import.meta.url)),
//   },
// },
