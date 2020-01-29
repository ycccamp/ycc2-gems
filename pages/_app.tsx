import App from "next/app"

import LoginLayout from "layouts/login"
import LoadingLayout from "layouts/loading"
import DashboardLayout from "layouts/dashboard"

import { auth } from "libs/firebase"
import { isServer, isEmpty } from "libs/helpers"

import "stylus/init.styl"

import YCCGemstoneState from "pageTypes/_app"

class YCCGemstone extends App<{}, {}, YCCGemstoneState> {
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
			<DashboardLayout>
				<Component {...pageProps} />
			</DashboardLayout>
		)
	}
}

export default YCCGemstone
