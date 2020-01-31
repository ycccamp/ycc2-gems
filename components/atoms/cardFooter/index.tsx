import { Fragment, FunctionComponent, memo } from 'react'

import Link from 'next/link'

import Button from '@material/react-button'

import './card-footer.styl'

import CardFooterProps from './types'

const CardFooter: FunctionComponent<CardFooterProps> = memo(
    ({ children, rippleFooter, href }) => {
        let displayType =
            typeof children !== 'undefined' ? (
                typeof children === 'string' ? (
                    <Fragment>
                        <p className="title">{children}</p>
                        <i className="material-icons -chevron">chevron_right</i>
                    </Fragment>
                ) : (
                    children
                )
            ) : null

        if (typeof children === 'undefined') return null

        if (rippleFooter)
            return (
                <footer className="card-footer-container">
                    <Link href={href}>
                        <Button className="footer">{displayType}</Button>
                    </Link>
                </footer>
            )

        return (
            <footer className="footer-outer">
                <div className="footer">{displayType}</div>
            </footer>
        )
    }
)

export default CardFooter
