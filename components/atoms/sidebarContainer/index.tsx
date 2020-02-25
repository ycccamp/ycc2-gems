import { FunctionComponent, useContext } from 'react'

import { StoreData } from 'components/atoms/storeProvider'

import './sidebar.styl'

import SidebarContainerProps from './types'

const SidebarContainer: FunctionComponent<SidebarContainerProps> = ({
    children,
    bottom = null,
}) => (
    <aside
        id="sidebar"
        className={useContext(StoreData).sidebar.isShowing ? '-hidden' : null}
    >
        <section className="area">{children}</section>
        <footer className="area">{bottom}</footer>
    </aside>
)

export default SidebarContainer
