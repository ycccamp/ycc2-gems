import { FunctionComponent, memo } from "react"

import Link from "next/link"

import MaterialButton from "@material/react-button"

import "./side-tab.styl"
import "@material/react-button/dist/button.css"

import TSideTab from "./types"

const SideTab: FunctionComponent<TSideTab> = memo(
	({ href, asButton = false, onClick = () => null, children }) =>
		asButton ? (
			<Link href={href}>
				<MaterialButton className="side-tab">
					{children}
				</MaterialButton>
			</Link>
		) : (
			<MaterialButton
				className="side-tab -button"
				onClick={() => onClick(event)}
			>
				{children}
			</MaterialButton>
		)
)

export default SideTab
