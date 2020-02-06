import { Fragment, memo } from 'react'

import dynamic from 'next/dynamic'

import SidebarContainer from 'components/atoms/sidebarContainer'
import HamburgerMenu from 'components/atoms/hamburgerMenu'

import './sidebar.styl'

const SideTab = dynamic(() => import('components/atoms/sideTab')),
    SidebarDivider = dynamic(() => import('components/atoms/sidebarDivider'))

const Sidebar = memo(() => (
    <SidebarContainer
        bottom={
            <Fragment>
                <SidebarDivider noMargin />
                <SideTab href="/settings" icon="settings">
                    Settings
                </SideTab>
            </Fragment>
        }
    >
        <header id="sidebar-header">
            <HamburgerMenu />
            <h1 className="title">YCC Gemstone</h1>
        </header>

        <SidebarDivider noMargin />

        <SideTab href="/">Summary</SideTab>
        <SideTab href="/dashboard" icon="dashboard">Dashboard</SideTab>
        <SideTab href="/analytics" icon="analytics">Analytics</SideTab>
        <SideTab href="/history" icon="history">History</SideTab>

        <SidebarDivider />

        <SideTab href="/profile" icon="account_box">Profile</SideTab>
    </SidebarContainer>
))

export default Sidebar
