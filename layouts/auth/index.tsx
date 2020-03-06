import { Fragment, useState, useEffect, useCallback } from 'react'

import store from 'stores'
import { useStore } from 'stores/provider'

import firebase from 'libs/firebase'
import { isBlank } from 'libs/helpers'

import './auth.styl'

const AuthLayout = ({ children }) => {
    let [isPending, updatePending] = useState(false)

    let { user } = useStore()

    useEffect(() => {
        firebase().then(({ auth }) => {
            auth.onAuthStateChanged(user => {
                if (!user) return store.set('user', {})

                let { displayName, photoURL, uid, email } = user
                store.set('user', { displayName, photoURL, uid, email })
            })
        })
    }, [])

    let loginWithFacebook = useCallback(async () => {
        // Prevent double submit
        if (isPending) return

        updatePending(true)

        let {
                auth: { FacebookAuthProvider, GoogleAuthProvider },
            } = await import('firebase/app'),
            provider = new FacebookAuthProvider(),
            { auth } = await firebase()

        await auth.signInWithPopup(provider)

        updatePending(false)
    }, [])

    if (isBlank(user))
        return (
            <Fragment>
                <section
                    id="auth-layout"
                    className={isPending ? '-pending' : ''}
                >
                    <img
                        className="icon"
                        src="/images/ycc_icon.png"
                        alt="Young Creators Camp's icon"
                    />
                    <button
                        id="login-facebook"
                        onClick={() => loginWithFacebook()}
                    >
                        <img
                            className="icon"
                            src="/images/facebook_icon.png"
                            alt="Facebook's icon"
                        />
                        Login with Facebook
                    </button>
                    <footer id="auth-footer">
                        Young Creators Camp 2: Gemstone
                    </footer>
                </section>
                <main style={{ display: 'none' }}>{children}</main>
            </Fragment>
        )

    return <main>{children}</main>
}

export default AuthLayout
