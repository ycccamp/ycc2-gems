import { memo, FunctionComponent } from 'react'

import './sidebar.styl'

import SidebarContainerProps from './types'

const SidebarContainer: FunctionComponent<SidebarContainerProps> = memo(
    ({ children, bottom }) => (
        <aside id="sidebar">
            <section className="area">{children}</section>
            <footer className="area">{bottom}</footer>
        </aside>
    )
)

export default SidebarContainer
