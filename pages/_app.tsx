import type { AppProps } from "next/app";
import { ThemeProvider, Global } from "@emotion/react";
import { global } from "../assets/theme/Global";
import theme from "../assets/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
