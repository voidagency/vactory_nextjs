import "../styles/globals.css"
import "keen-slider/keen-slider.min.css"
import { Header } from "../components/chaibi-header/chaibi-header"
import { Footer } from "../widgets/footer/footer"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</AppWrapper>
	)
}

export default MyApp
