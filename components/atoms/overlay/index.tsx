import { useEffect, useState, useContext } from 'react'

import { StoreData } from "components/atoms/storeProvider"
import dismissOverlay from "stores/dispatch/dismissOverlay"

import './overlay.styl'

const Overlay = () => {
    let [showOverlay, updateOverlay] = useState(false)
    let { sidebar, profile } = useContext(StoreData)

    useEffect(() => {
        if (sidebar.isShowing) return updateOverlay(true)
        if (profile.isShowing) return updateOverlay(true)

        updateOverlay(false)    
    }, [sidebar, profile])

    return showOverlay ? (
        <div id="overlay" onClick={() => dismissOverlay()} />
    ) : null
}

export default Overlay
