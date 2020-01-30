import { useState, useEffect } from "react"

import dynamic from "next/dynamic"

import { auth } from "libs/firebase"

import LoginLayout from "layouts/login"

import { isServer, isEmpty } from "libs/helpers"

import { TUserState } from "./types"

const LoadingLayout = dynamic(() => import("layouts/loading"), {
		loading: () => <LoadingLayout />
	}),
	DashboardLayout = dynamic(() => import("layouts/dashboard"), {
		loading: () => <LoadingLayout />
	})

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
