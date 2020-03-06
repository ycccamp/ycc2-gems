import QrCode from 'qrcode.react'

import { useStore } from 'stores/provider'

import './qruid.styl'

const QrUID = () => {
    let {
        user: { uid = '' },
    } = useStore()

    return (
        <section id="qruid">
            <QrCode
                width={144}
                height={144}
                value={`https://ycc2-gem.now.sh/admin/${uid}`}
                className="image"
                renderAs="svg"
                fgColor="var(--text)"
                bgColor="var(--background)"
            />
        </section>
    )
}

export default QrUID
