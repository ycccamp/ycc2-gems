/* Next */
import Document, { Html, Head, Main, NextScript } from "next/document"

/* Page */
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Init */}
					<meta
						httpEquiv="content-type"
						content="text/html, charset=utf8"
					/>
					<meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge,chrome=1"
					/>

					{/* SEO */}
					<meta name="title" content="YCC2 Gemstone" />
					<meta name="author" content="SaltyAom" />
					<link rel="icon" href="/images/ycc_iconX512.png" />

					{/* Open Graph */}
					<meta
						property="og:title"
						content="YCC2 Gemstone"
					/>
					<meta property="article:author" content="SaltyAom" />
					<meta
						property="og:site_name"
						content="YCC2 Gemstone"
					/>

					{/* Web App */}
					<link rel="manifest" href="/manifest.json" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="application-name"
						content="Gemstone"
					/>

					{/* Apple Web app */}
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-title"
						content="Gemstone"
					/>
					<link rel="apple-touch-icon" href="/images/ycc_iconX512.png" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="apple-touch-fullscreen" content="yes" />
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
