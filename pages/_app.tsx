import App from "next/app"

import "stylus/init.styl"

class YCCGemstone extends App {
	render() {
		let { Component, pageProps } = this.props

		return (
			<Component {...pageProps} />
		)
	}
}

export default YCCGemstone
