import Sidebar from "components/molecules/sidebar"

import './dashboard-layout.styl'

const DashboardLayout = ({ children }) => {
    return (
        <main id="dashboard-layout">
            <Sidebar />
            { children }
        </main>
    )
}

export default DashboardLayout