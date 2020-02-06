import { FunctionComponent, memo } from 'react'

import CardHeader from 'components/atoms/cardHeader'
import CardBody from 'components/atoms/cardBody'
import CardImage from 'components/atoms/cardImage'

import './card.styl'

import CardProps from './types'
import CardFooter from 'components/atoms/cardFooter'

const Card: FunctionComponent<CardProps> = memo(
    ({ children, rippleFooter = false, header, footer, href = '', image }) => (
        <article className="card" tabIndex={0}>
            {image ? <CardImage src={image} /> : null}
            <CardHeader>{header}</CardHeader>
            <CardBody>{children}</CardBody>
            <CardFooter rippleFooter={rippleFooter} href={href}>
                {footer}
            </CardFooter>
        </article>
    )
)

export default Card
