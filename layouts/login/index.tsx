import { memo, Fragment } from 'react'

import FacebookButton from 'components/core/facebookButton'

import './login-layout.styl'

const LoginLayout = memo(({ children }) => (
    <Fragment>
        <main id="login-layout">
            <img id="ycc-icon" src="/images/ycc-icon.png" alt="YCC's icon" />
            <section className="display">
                <FacebookButton />
            </section>
        </main>
        {children}
    </Fragment>
))

export default LoginLayout
