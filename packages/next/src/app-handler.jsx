import { NextIntlProvider } from "next-intl"
import { SessionProvider } from "next-auth/react"
import dynamic from "next/dynamic"
import { getDefaultLanguage } from "./utils"

const TopProgressBar = dynamic(
  () => {
    return import("./top-progress-bar")
  },
  { ssr: false }
)

const defaultLanguage = getDefaultLanguage()

export const AppHandler = ({
  children,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <TopProgressBar />
      <SessionProvider session={session}>
        <NextIntlProvider
          messages={pageProps?.i18n || {}}
          locale={pageProps?.locale || defaultLanguage}
        >
          {children}
        </NextIntlProvider>
      </SessionProvider>
    </>
  )
}
