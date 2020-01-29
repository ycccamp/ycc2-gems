import { Fragment } from "react"

import dynamic from "next/dynamic"

import SidebarContainer from "components/atoms/sidebarContainer"

import './sidebar.styl'

const SideTab = dynamic(() => import("components/atoms/sideTab")),
	SidebarDivider = dynamic(() => import("components/atoms/sidebarDivider"))

const Sidebar = () => (
	<SidebarContainer
		bottom={
			<Fragment>
				<SidebarDivider noMargin />
				<SideTab href="/">A</SideTab>
			</Fragment>
		}
	>
		<header id="sidebar-header">
			<h1 className="title">YCC Gemstone</h1>
		</header>

		<SidebarDivider noMargin />
		
		<SideTab href="/">A</SideTab>
		<SideTab href="/">A</SideTab>
		<SideTab href="/">A</SideTab>

		<SidebarDivider />

		<SideTab href="/">A</SideTab>
	</SidebarContainer>
)

export default Sidebar
