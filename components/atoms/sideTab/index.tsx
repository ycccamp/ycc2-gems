import { FunctionComponent } from 'react'

import toggleSidebar from "stores/dispatch/toggleSidebar"

import Link from 'next/link'
import { useRouter } from 'next/router'

import MaterialButton from '@material/react-button'

import './side-tab.styl'

import TSideTab from './types'

const SideTab: FunctionComponent<TSideTab> = ({
    href,
    asButton = false,
    onClick = () => null,
    children,
    icon = 'home',
}) => {
    let { pathname } = useRouter(),
        isActive = pathname === href

    return asButton ? (
        <MaterialButton
            icon={<i className={`material-icons ${icon}`} />}
            className="side-tab -button"
            onClick={() => onClick(event)}
        >
            {children}
        </MaterialButton>
    ) : (
        <Link href={href}>
            <MaterialButton
                icon={<i className="material-icons -icon">{icon}</i>}
                className={`side-tab ${isActive ? '-active' : ''}`}
                disabled={isActive}
            >
                {children}
            </MaterialButton>
        </Link>
    )
}

export default SideTab
