import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import MainLayout from "@/layouts/MainLayout";
import { ThemeProvider } from "@/myComponents/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </Fragment>
  );
}
