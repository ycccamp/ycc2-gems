import { memo } from 'react'

import toggleProfile from "stores/dispatch/toggleProfile"

import './profile-badge.styl'

const ProfileBadge = memo(() => (
    <button className="profile-badge" onClick={() => toggleProfile()}>
        <img className="profile-icon" src="/images/mock.jpg" />
    </button>
))

export default ProfileBadge
