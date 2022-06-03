/*global naver*/
import type { AppProps } from 'next/app'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider, Global } from '@emotion/react'
import { global } from '../assets/theme/Global'
import theme from '../assets/theme/theme'
import MuiTheme from '../assets/theme/MuiTheme'
import Script from 'next/script'

declare global {
  interface Window {
    kakao: any
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_NAVER_API_KEY)
  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_KEY}`}
        strategy="beforeInteractive"
      ></Script>
      <MuiThemeProvider theme={MuiTheme}>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default MyApp
