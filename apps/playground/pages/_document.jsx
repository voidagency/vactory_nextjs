import Document, { Html, Head, Main, NextScript } from "next/document"
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
