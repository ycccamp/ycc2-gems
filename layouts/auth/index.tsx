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
    CoreLayout = dynamic(() => import('layouts/core'), {
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
            <CoreLayout>{children}</CoreLayout>
        </LoadingLayout>
    ) : isEmpty(user) ? (
        <LoginLayout>
            <CoreLayout>{children}</CoreLayout>
        </LoginLayout>
    ) : (
        <CoreLayout>{children}</CoreLayout>
    )
}

export default AuthLayout
