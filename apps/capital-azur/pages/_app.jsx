import "../styles/globals.css"
import "keen-slider/keen-slider.min.css"
import { theme } from "../theme/theme"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<AppWrapper theme={theme}>
				<Component {...pageProps} />
			</AppWrapper>
		</ThemeProvider>
	)
}

export default MyApp
