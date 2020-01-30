import { useState, useEffect } from "react"

import { auth } from "libs/firebase"

import LoginLayout from "layouts/login"
import LoadingLayout from "layouts/loading"
import DashboardLayout from "layouts/dashboard"

import { isServer, isEmpty } from "libs/helpers"

import { TUserState } from "./types"

const AuthLayout = ({ children }) => {
	let [user, updateUser] = useState<TUserState>(undefined)

	useEffect(() => {
		if (isServer) return

		auth.onAuthStateChanged(user =>
			user ? updateUser(user) : updateUser({})
		)
    }, [])

	return typeof user === "undefined" ? (
		<LoadingLayout />
	) : isEmpty(user) ? (
		<LoginLayout />
	) : (
		<DashboardLayout>{children}</DashboardLayout>
	)
}

export default AuthLayout
