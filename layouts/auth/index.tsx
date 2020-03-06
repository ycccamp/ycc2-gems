import { Fragment, useState, useEffect, useCallback } from 'react'

import store from 'stores'
import { useStore } from 'stores/provider'

import useFirebase from 'libs/firebase'
import { isBlank } from 'libs/helpers'

import './auth.styl'

const AuthLayout = ({ children }) => {
    let [isPending, updatePending] = useState(false)

    let { user } = useStore()

    useEffect(() => {
        useFirebase().then(({ auth }) => {
            auth.onAuthStateChanged(user => {
                if (!user) return store.set('user', {})

                let { displayName, photoURL, uid, email } = user
                store.set('user', { displayName, photoURL, uid, email })
                JSON.parse(localStorage.getItem('user'))
            })
        })
    }, [])

    let loginWithFacebook = useCallback(async () => {
        // Prevent double submit
        if (isPending) return

        updatePending(true)

        try {
            let { auth, provider } = await useFirebase()

            await auth.signInWithPopup(provider)
        } catch(error) {
            console.error(error)
            updatePending(false)
        }

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
