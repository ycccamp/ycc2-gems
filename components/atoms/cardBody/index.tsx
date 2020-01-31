import { memo, FunctionComponent } from 'react'

import './card-body.styl'

import CardBodyProps from './types'

const CardBody: FunctionComponent<CardBodyProps> = memo(({ children }) =>
    typeof children !== 'undefined' ? (
        <section className="body">{children}</section>
    ) : null
)

export default CardBody
