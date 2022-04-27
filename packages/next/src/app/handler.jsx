import { SessionProvider } from "next-auth/react"
import dynamic from "next/dynamic"
// import Head from "next/head"
import { MenuProvider } from "../menus/menus"
import { getDefaultLanguage } from "../utils"
import { I18n } from "../i18n"
import RefreshTokenHandler from "./refreshTokenHandler"

const TopProgressBar = dynamic(
	() => {
		return import("../components/top-progress-bar")
	},
	{ ssr: false }
)

const defaultLanguage = getDefaultLanguage()

export const AppHandler = ({ children, pageProps: { session, ...pageProps } }) => {
	return (
		<>
			<TopProgressBar />
			<SessionProvider session={session}>
				<I18n
					lngDict={pageProps?.i18n || {}}
					locale={pageProps?.locale || defaultLanguage}
				>
					<MenuProvider menus={pageProps?.menus || []}>{children}</MenuProvider>
				</I18n>
				<RefreshTokenHandler />
			</SessionProvider>
		</>
	)
}
