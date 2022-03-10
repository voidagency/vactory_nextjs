import { NextIntlProvider } from "next-intl"
import { SessionProvider } from "next-auth/react"
import dynamic from "next/dynamic"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const TopProgressBar = dynamic(
  () => {
    return import("./top-progress-bar")
  },
  { ssr: false }
)

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
          locale={pageProps?.locale || publicRuntimeConfig.i18n.defaultLanguage}
        >
          {children}
        </NextIntlProvider>
      </SessionProvider>
    </>
  )
}
