import { useEffect } from "react"
import { useRouter } from "next/router"
import { AppHandler } from "@vactory/next/app"
import Script from "next/script"
import { GTM_ID, pageview } from "../lib/gtm"
import "nprogress/nprogress.css"
// import "styles/globals.css"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
	// @todo: pageProps extract node && pass it to pageview
	const router = useRouter()
	useEffect(() => {
		router.events.on("routeChangeComplete", pageview)
		return () => {
			router.events.off("routeChangeComplete", pageview)
		}
	}, [router.events])

	return (
		<>
			{/* Google Tag Manager - Global base code */}
			<Script
				strategy="afterInteractive"
				id={"gtm"}
				dangerouslySetInnerHTML={{
					__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
				}}
			/>
			<AppHandler pageProps={pageProps}>
				<Component {...pageProps} />
			</AppHandler>
		</>
	)
}
