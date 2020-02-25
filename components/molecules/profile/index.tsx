import { memo, useContext } from 'react'

import { StoreData } from 'components/atoms/storeProvider'

import './profile.styl'

const Profile = memo(() =>
    useContext(StoreData).profile.isShowing ? (
        <section id="profile"></section>
    ) : null
)

export default Profile
