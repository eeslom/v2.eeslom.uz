import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { createResolver } from 'nuxt/kit'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const resolver = createResolver(import.meta.url)

export default defineConfig({
  content: {
    filesystem: [resolver.resolve('./content/**/*.md')],
  },
  shortcuts: [
    ['btn', 'shadow-sm outline-none bg-blue capitalize px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed hover:bg-op-80'],
    ['btn-outline', 'border-2 outline-none border-blue text-white capitalize px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed hover:bg-blue/20'],
    ['btn-link', 'border-b-2 border-blue outline-none text-white capitalize text-sm disabled:opacity-70 disabled:cursor-not-allowed'],
    ['inp', 'w-full mt-1 p-3 bg-gray outline-none border border-transparent focus:border-yellow'],
    ['underlined-link', 'relative inline-block after:block after:my-[-0.5em] after:mx-[-0.25em] after:opacity-10 after:border-current after:content-empty after:duration-300 after:transition-border-color after:transition-opacity after:border-b-[0.5em] outline-none hover:after:opacity-35 active:after:opacity-35 focus:after:opacity-35'],
  ],
  theme: {
    colors: {
      primarySidebar: '#333333',
      blue: '#007ACC',
      darkYellow: '#D7CB66',
      yellow: '#F1D700',
      gray: '#3C3C3C',
      green: '#16825D',
      muted: '#d1d5db',
      asda: '#37373D',
      foreground: '#d4d4d4',
      border: '#454545',
      background: '#1E1E1E',
      actionBar: '#383a49',
      tab: {
        inActive: '#2D2D2D',
      },
      menu: {
        background: '#252526',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Source Sans Pro',
        mono: 'JetBrains Mono',
        montserrat: 'Montserrat',
        code: 'Fira Code',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
