import "../styles/globals.css"
import "keen-slider/keen-slider.min.css"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper theme={theme}>
			<Component {...pageProps} />
		</AppWrapper>
	)
}

export default MyApp
