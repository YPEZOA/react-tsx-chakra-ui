import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = extendTheme({
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#f2f2f2', '#202023')(props),
      color: mode('teal', 'cyan')
    }
  })
})

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles })

export default theme
