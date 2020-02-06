import { FunctionComponent, Fragment, useEffect, useState } from 'react'

import store from 'stores'

import { isServer } from 'libs/helpers'
import toggleSidebar from 'stores/dispatch/toggleSidebar'

import './sidebar.styl'

import SidebarContainerProps from './types'

const SidebarContainer: FunctionComponent<SidebarContainerProps> = ({
    children,
    bottom = null,
}) => {
    let [showSidebar, updateSidebar] = useState(false)

    useEffect(() => {
        store.subscribe('sidebar', ({ isShowing }) => updateSidebar(isShowing))
    }, [])

    return (
        <Fragment>
            {showSidebar ? (
                <div id="overlay" onClick={() => toggleSidebar()} />
            ) : null}
            <aside id="sidebar" className={!showSidebar ? '-hidden' : null}>
                <section className="area">{children}</section>
                <footer className="area">{bottom}</footer>
            </aside>
        </Fragment>
    )
}

export default SidebarContainer
