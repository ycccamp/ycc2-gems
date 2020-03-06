import { useState, Fragment } from 'react'

import QrUID from './qruid'

import './share.styl'

const Share = () => {
    let [showQr, updateQr] = useState(false)

    return (
        <Fragment>
            <img
                id="share"
                src="/images/airplay.svg"
                alt="Share QrCode"
                tabIndex={0}
                aria-label="Share QrCode"
                onClick={() => updateQr(!showQr)}
            />
            {showQr ? <QrUID /> : null}
        </Fragment>
    )
}

export default Share
