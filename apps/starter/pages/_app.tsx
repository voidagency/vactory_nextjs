import { AppProps } from "next/app"
import { NextIntlProvider } from "next-intl"

import "styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps?.i18n || {}}
      locale={pageProps?.locale || "fr"}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}
