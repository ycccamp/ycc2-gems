import { memo, FunctionComponent } from 'react'

import "./card-header.styl"

import CardHeaderProps from './types'

const CardHeader: FunctionComponent<CardHeaderProps> = memo(({ children }) =>
    typeof children === 'string' ? (
        <header className="card-header">
            <h1 className="title">{children}</h1>
        </header>
    ) : null
)

export default CardHeader
