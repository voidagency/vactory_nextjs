import Document, { Html, Head, Main, NextScript } from "next/document"
import { GTM_ID } from "../lib/gtm"
import { getDefaultLanguage } from "@vactory/next/utils"

const defaultLanguage = getDefaultLanguage()
// @TODO: add an option to add more RTL languages; ar is not the only one

export default class AppDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps, locale: ctx?.locale || defaultLanguage }
	}

	render() {
		return (
			<Html dir={this.props.locale === "ar" ? "rtl" : "ltr"} lang={this.props.locale}>
				<Head />
				<body>
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
