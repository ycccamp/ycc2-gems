import { Fragment, memo } from 'react'

import Sidebar from 'components/molecules/sidebar'
import Navbar from "components/molecules/navbar"

import './core.styl'

const DashboardLayout = memo(({ children }) => (
    <Fragment>
        <Sidebar />
        <Navbar />
        <section id="core-layout">{children}</section>
    </Fragment>
))

export default DashboardLayout
