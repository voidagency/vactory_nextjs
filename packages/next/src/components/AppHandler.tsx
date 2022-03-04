import { NextIntlProvider } from "next-intl"

export const AppHandler = ({ children, pageProps }) => {
  return (
    <NextIntlProvider
      messages={pageProps?.i18n || {}}
      locale={pageProps?.locale || "fr"}
    >
      {children}
    </NextIntlProvider>
  )
}
