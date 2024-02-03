import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config.js'

type TailwindTheme = typeof tailwindConfig.theme &
  typeof tailwindConfig.theme.extend

const tailwindResolvedConfig = resolveConfig(tailwindConfig)

export const themeExtracted = tailwindResolvedConfig.theme as TailwindTheme
