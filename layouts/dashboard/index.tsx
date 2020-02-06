import { memo } from 'react'

import './dashboard-layout.styl'

const DashboardLayout = memo(({ children }) => (
    <main id="dashboard-layout">{children}</main>
))

export default DashboardLayout
