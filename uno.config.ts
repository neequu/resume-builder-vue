import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

// @unocss-include

export default defineConfig({
  shortcuts: [
    ['n-link', 'op50 hover:(op100 text-primary) transition'],
  ],
  theme: {
    colors: {
      primary: '',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // sans: 'DM Sans',
        // serif: 'DM Serif Display',
        // mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    // transformerDirectives(),
    // transformerVariantGroup(),
  ],
})
