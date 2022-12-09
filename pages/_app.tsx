import GlobalStyles from "../styles/globalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Html } from "next/document";

const theme = {
  colors: {
    gray: "#C5C5C5",
    onyx: "#353839",
    blue: "#8DD7F2",
    purplePrimary: "#8E94F2",
    purpleLighter: "#C6C9F8",
  },
  size: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
