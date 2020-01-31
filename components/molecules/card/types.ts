import { ReactNode } from "react"

interface CardPropsWithoutFooter {
    children?: ReactNode
    header?: string
    footer?: undefined
    rippleFooter?: boolean
    href?: string
}

interface CardPropsWithFooterRipple {
    children?: ReactNode
    header?: string
    footer?: string
    rippleFooter?: true
    href?: string
}

interface CardPropsWithoutFooterRipple {
    children?: ReactNode
    header?: string
    footer?: ReactNode
    rippleFooter?: false
    href?: string
}

type CardProps = CardPropsWithoutFooter | CardPropsWithFooterRipple | CardPropsWithoutFooterRipple
export default CardProps