import QrCode from 'qrcode.react'

import { useStore } from 'stores/provider'

import './qruid.styl'

const QrUID = () => {
    let {
        user: { uid = "" },
    } = useStore()

    return (
        <QrCode
            id="qruid"
            width={128}
            height={128}
            value={`https://ycc2-gem.now.sh/admin/${uid}`}
            renderAs="svg"
            fgColor="var(--text)"
            bgColor="var(--background)"
        />
    )
}

export default QrUID
