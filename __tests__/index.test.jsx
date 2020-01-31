import React, { Fragment } from "react"
import { shallow } from "enzyme"

import AuthLayout from "layouts/auth"
import DashboardLayout from "layouts/dashboard"

import FacebookButton from "components/core/facebookButton"
import SideTab from "components/atoms/sideTab"
import SidebarContainer from "components/atoms/SidebarContainer"
import SidebarDivider from "components/atoms/sidebarDivider"
import Sidebar from "components/molecules/sidebar"

describe("Login page", () => {
	it("contains Facebook Login Button", () => {
		let app = shallow(<AuthLayout />)

		expect(app.find(FacebookButton)).toBeTruthy()
	})
})

describe("Dashboard", () => {
	it("contains Sidebar", () => {
		let app = shallow(<DashboardLayout />)

		expect(app.find(Sidebar)).toBeTruthy()
	})
})

describe("Sidebar", () => {
	let Sidebar = shallow(
		<SidebarContainer
			bottom={
				<Fragment>
					<SidebarDivider />
					<SideTab href="/settings">Settings</SideTab>
				</Fragment>
			}
		>
			<SideTab href="/">Dashboard</SideTab>
			<SideTab href="/graph">Analytics</SideTab>
			<SideTab />
			<SideTab href="/nendoroid">Nendoroid</SideTab>
		</SidebarContainer>
	)

	it("can contain sidetab", () => {
		expect(Sidebar.find(SidebarDivider)).toBeTruthy()
    })
    
    it("can contain sidebar container", () => {
		expect(Sidebar.find(SidebarContainer)).toBeTruthy()
	})
})
