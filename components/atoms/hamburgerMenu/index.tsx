import { memo } from 'react'

import toggleSidebar from "stores/dispatch/toggleSidebar"

import './hamburger-menu.styl'

const HamburgerMenu = memo(() => (
        <button
            className="hamburger-menu material-icons"
            onClick={() => toggleSidebar()}
        >
            menu
        </button>
    )
)

export default HamburgerMenu
