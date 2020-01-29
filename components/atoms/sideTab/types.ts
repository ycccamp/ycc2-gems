import { ReactChild } from "react"

interface SideTabAsLink {
    href: string
    asButton?: false
    onClick?: () => null
    children: ReactChild
}

interface SideTabAsButton {
    href?: undefined
    asButton: true
    onClick(event: Event): Function
    children: ReactChild
}

type TSideTab = SideTabAsLink | SideTabAsButton
export default TSideTab