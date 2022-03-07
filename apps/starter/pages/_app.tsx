import { AppHandler } from "@vactory/next"

import "nprogress/nprogress.css"
import "styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <AppHandler pageProps={pageProps}>
      <Component {...pageProps} />
    </AppHandler>
  )
}
