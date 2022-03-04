import { AppProps } from "next/app"
import { AppHandler } from "@vactory/next"

import "styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppHandler pageProps={pageProps}>
      <Component {...pageProps} />
    </AppHandler>
  )
}
