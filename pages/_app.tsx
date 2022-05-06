import type { AppProps } from 'next/app'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider, Global } from '@emotion/react'
import { global } from '../assets/theme/Global'
import theme from '../assets/theme/theme'
import MuiTheme from '../assets/theme/MuiTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default MyApp
