import { memo } from "react"

import Link from "next/link"

import SideTab from "./types"

import "./side-tab.styl"

const SideTab = memo(
	({ href, asButton = false, onClick = () => null, children }: SideTab) =>
		asButton ? (
			<Link href={href}>
				<a className="side-tab">{children}</a>
			</Link>
		) : (
			<button className="side-tab -button" onClick={() => onClick(event)}>{children}</button>
		)
)

export default SideTab