import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import { auth } from 'libs/firebase'

import LoadingLayout from 'layouts/loading'

import { isServer, isEmpty } from 'libs/helpers'

import { TUserState } from './types'

const LoginLayout = dynamic(() => import('layouts/login'), {
        loading: () => (
            <LoadingLayout />
        ),
    }),
    DashboardLayout = dynamic(() => import('layouts/dashboard'), {
        loading: () => <LoadingLayout />,
    })

const AuthLayout = ({ children }) => {
    let [user, updateUser] = useState<TUserState>(undefined)

    useEffect(() => {
        if (isServer) return

        auth.onAuthStateChanged(user =>
            user ? updateUser(user) : updateUser({})
        )
    }, [])

    return typeof user === 'undefined' ? (
        <LoadingLayout>
            <DashboardLayout>{children}</DashboardLayout>
        </LoadingLayout>
    ) : isEmpty(user) ? (
        <LoginLayout>
            <DashboardLayout>{children}</DashboardLayout>
        </LoginLayout>
    ) : (
        <DashboardLayout>{children}</DashboardLayout>
    )
}

export default AuthLayout
