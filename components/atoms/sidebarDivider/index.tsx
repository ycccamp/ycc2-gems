import { memo, FunctionComponent } from "react"

import "./sidebar-divider.styl"

import SidebarDividerProps from "./types"

const SidebarDivider: FunctionComponent<SidebarDividerProps> = memo(
	({ noMargin = false }) => (
		<div className={`sidebar-divider ${noMargin ? "-no-margin" : ""} `} />
	)
)

export default SidebarDivider
