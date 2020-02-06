import { memo } from 'react'

import './profile-badge.styl'

const ProfileBadge = memo(() => (
    <button className="profile-badge">
        <img className="profile-icon" src="/images/mock.jpg" />
    </button>
))

export default ProfileBadge