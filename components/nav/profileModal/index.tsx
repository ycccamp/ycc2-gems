import { useCallback } from 'react'

import { useStore } from 'stores/provider'

import firebase from 'libs/firebase'

import './profile-modal.styl'

const ProfileModal = () => {
    let {
        user: { displayName = "", email = "", photoURL = "" },
    } = useStore()

    let logout = useCallback(async () => {
        let { auth } = await firebase()

        auth.signOut()
    }, [])

    return (
        <article id="profile-modal">
            <header className="header">
                <figure className="profile">
                    <img className="image" src={`${photoURL}?width=720`} alt="Profile Image" />
                </figure>
                <h3 className="name">{displayName}</h3>
                <p className="email">{email}</p>
            </header>
            <footer className="footer">
                <button className="logout" onClick={() => logout()}>
                    Logout
                </button>
            </footer>
        </article>
    )
}

export default ProfileModal
