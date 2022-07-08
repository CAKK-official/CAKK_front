import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider, Global } from '@emotion/react'
import { global } from '../assets/theme/Global'
import theme from '../assets/theme/theme'
import MuiTheme from '../assets/theme/MuiTheme'
import Script from 'next/script'

declare global {
  interface Window {
    kakao: any
    Kakao: any
    naver: any
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY)
  }, [])
  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtag-layer" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
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
