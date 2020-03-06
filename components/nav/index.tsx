import { Fragment, useState } from 'react'

import { useStore } from 'stores/provider'

import ProfileModal from './profileModal'

import './nav.styl'

const Navbar = () => {
    let {
        user: { photoURL = "" },
    } = useStore()

    let [showModal, updateModal] = useState(false)

    return (
        <Fragment>
            <nav id="nav">
                <figure
                    className="profile"
                    tabIndex={0}
                    onClick={() => updateModal(!showModal)}>
                    <img className="image" src={photoURL} alt="Profile image" />
                </figure>
            </nav>
            {showModal ? <ProfileModal /> : null}
        </Fragment>
    )
}

export default Navbar
