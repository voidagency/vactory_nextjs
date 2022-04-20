import "../styles/globals.css"
import "keen-slider/keen-slider.min.css"
import { theme } from "../theme/theme"
import { AppWrapper } from "@vactory/ui/app-wrapper"

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper theme={theme}>
			<Component {...pageProps} />
		</AppWrapper>
	)
}

export default MyApp
