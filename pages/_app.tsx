import App from "next/app"

import AuthLayout from "layouts/auth"

import "stylus/init.styl"

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
