import App from 'next/app'

import StoreProvider from 'stores/provider'

import 'styles/init.styl'
import AuthLayout from 'layouts/auth'

class Next extends App {
    componentDidMount() {
        document.addEventListener('touchstart', () => null, false)

        if (
            'serviceWorker' in navigator &&
            process.env.NODE_ENV === 'production' &&
            typeof window !== 'undefined'
        )
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js', {
                    scope: '/',
                })
            })
    }

    render() {
        let { Component, pageProps } = this.props

        return (
            <StoreProvider>
                <AuthLayout>
                    <Component {...pageProps} />
                </AuthLayout>
            </StoreProvider>
        )
    }
}

export default Next
