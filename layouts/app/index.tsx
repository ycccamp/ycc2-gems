import { Fragment } from 'react'

import Nav from 'components/nav'

import './app-layout.styl'

const AppLayout = ({ children }) => (
    <Fragment>
        <Nav />
        <section id="gemstone">
            {children}
        </section>
    </Fragment>
)

export default AppLayout