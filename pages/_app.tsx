import App from "next/app"

import AuthLayout from "layouts/auth"

import "stylus/init.styl"
import "public/material-icons/round.css"
import "@material/react-button/dist/button.css" // Required from compiler

class YCCGemstone extends App {
	render() {
		let { Component, pageProps } = this.props

		return (
			<AuthLayout>
				<Component {...pageProps} />
			</AuthLayout>
		)
	}
}

export default YCCGemstone
