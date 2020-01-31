import { ReactChild } from "react"

interface SideTabAsLink {
    href: string
    asButton?: false
    onClick?: () => null
    children: ReactChild
    icon?: string
}

interface SideTabAsButton {
    href?: undefined
    asButton: true
    onClick(event: Event): Function
    children: ReactChild
    icon?: string
}

type TSideTab = SideTabAsLink | SideTabAsButton
export default TSideTab