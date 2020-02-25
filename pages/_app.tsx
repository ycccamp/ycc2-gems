import App from "next/app"

import AuthLayout from "layouts/auth"
import StoreProvider from "components/atoms/storeProvider"

import "stylus/init.styl"
import "public/material-icons/round.css"
import "@material/react-button/dist/button.css" // Required from compiler

class YCCGemstone extends App {
	render() {
		let { Component, pageProps } = this.props

		return (
			<StoreProvider>
				<AuthLayout>
					<Component {...pageProps} />
				</AuthLayout>
			</StoreProvider>
		)
	}
}

export default YCCGemstone
