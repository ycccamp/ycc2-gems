import App from "next/app"

import LoginLayout from "layouts/login"
import LoadingLayout from "layouts/loading"

import { auth } from "libs/firebase"
import { isServer, isEmpty } from "libs/helpers"

import "stylus/init.styl"

class YCCGemstone extends App<{}, {}, { user: Object }> {
	constructor(props) {
		super(props)

		this.state = {
			user: undefined
		}
	}

	componentWillMount() {
		if (isServer) return

		auth.onAuthStateChanged(user =>
			user ? this.setState({ user: user }) : this.setState({ user: {} })
		)
	}

	render() {
		let { Component, pageProps } = this.props

		return typeof this.state.user === "undefined" ? (
			<LoadingLayout />
		) : isEmpty(this.state.user) ? (
			<LoginLayout />
		) : (
			<Component {...pageProps} />
		)
	}
}

export default YCCGemstone
