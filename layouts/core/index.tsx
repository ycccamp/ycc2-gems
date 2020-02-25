import { Fragment, memo } from 'react'

import dynamic from 'next/dynamic'

import Sidebar from 'components/molecules/sidebar'
import Navbar from 'components/molecules/navbar'
import Profile from 'components/molecules/profile'

import './core.styl'

const Overlay = dynamic(() => import('components/atoms/overlay'))

const DashboardLayout = memo(({ children }) => (
    <Fragment>
        <Sidebar />
        <Navbar />
        <Profile />
        <Overlay />
        <section id="core-layout">{children}</section>
    </Fragment>
))

export default DashboardLayout
