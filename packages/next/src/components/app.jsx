import { SessionProvider } from "next-auth/react"
import dynamic from "next/dynamic"
import { MenuProvider } from "../context/menus"
import { I18nProvider } from "../context/i18n"
import RefreshTokenHandler from "./refreshTokenHandler"

const TopProgressBar = dynamic(
	() => {
		return import("./top-progress-bar")
	},
	{ ssr: false }
)

export const AppHandler = ({ children, pageProps: { session, ...pageProps } }) => {
	return (
		<>
			<TopProgressBar />
			<SessionProvider session={session}>
				<I18nProvider lngDict={pageProps?.i18n || {}} locale={pageProps?.locale}>
					<MenuProvider menus={pageProps?.menus || []}>{children}</MenuProvider>
				</I18nProvider>
				<RefreshTokenHandler />
			</SessionProvider>
		</>
	)
}
