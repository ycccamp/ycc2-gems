import { memo } from 'react'

import './landing-layout.styl'

const LandingLayout = memo(({ children }) => (
    <main id="landing-layout">{children}</main>
))

export default LandingLayout
