import { useState, useRef, useEffect } from 'react'

import { isServer } from 'libs/helpers'

import NavHamburgerMenu from 'components/atoms/hamburgerMenu'
import ProfileBadge from 'components/atoms/profileBadge'

import './navbar.styl'

const Navbar = () => {
    let [isShowing, updateShow] = useState(true)

    let latestVerticalPosition = useRef(0),
        previousVerticalPosition = useRef(0)

    useEffect(() => {
        if (isServer) return

        let scrollHandler = () => {
            latestVerticalPosition.current = window.scrollY

            let currentVerticalPosition = window.scrollY

            setTimeout(() => {
                // Debounce
                if(currentVerticalPosition !== latestVerticalPosition.current) return

                if(latestVerticalPosition.current <= previousVerticalPosition.current)
                    updateNavbar(true)
                else
                    updateNavbar(false)
            }, 200)
        }

        window.addEventListener("scroll", scrollHandler, true)

        // Clean up
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    let updateNavbar = (state: boolean) => {
        previousVerticalPosition.current = latestVerticalPosition.current
        updateShow(state)
    }

    return (
        <nav id="navbar" className={!isShowing ? "-hidden" : null}>
            <section className="heading">
                <NavHamburgerMenu />
                <h1 className="title">Profile</h1>
            </section>
            <ProfileBadge />
        </nav>
    )
}

export default Navbar
