import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
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

export default defineConfig({
  shortcuts: [
    ['btn', 'shadow-sm outline-none bg-blue capitalize px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed hover:bg-op-80'],
    ['btn-outline', 'border-2 outline-none border-blue text-white capitalize px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed hover:bg-blue/20'],
    ['btn-link', 'border-b-2 border-blue outline-none text-white capitalize text-sm disabled:opacity-70 disabled:cursor-not-allowed'],
    ['inp', 'w-full mt-1 p-3 bg-gray outline-none border border-transparent focus:border-yellow'],
  ],
  theme: {
    colors: {
      primarySidebar: '#333333',
      blue: '#007ACC',
      darkYellow: '#D7CB66',
      yellow: '#F1D700',
      gray: '#3C3C3C',
      green: '#16825D',
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
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
