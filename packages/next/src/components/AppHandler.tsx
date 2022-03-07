import { NextIntlProvider } from "next-intl"
import { SessionProvider } from "next-auth/react"

export const AppHandler = ({
  children,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextIntlProvider
        messages={pageProps?.i18n || {}}
        locale={pageProps?.locale || "fr"}
      >
        {children}
      </NextIntlProvider>
    </SessionProvider>
  )
}
