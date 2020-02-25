import { createContext, useState, useEffect } from 'react'

import store from 'stores'

export const StoreData = createContext(null)

const StoreProvider = ({ children }) => {
    const [sidebar, updateSidebar] = useState(store.get('sidebar')),
        [profile, updateProfile] = useState(store.get('profile'))

    useEffect(() => {
        store.subscribe('sidebar', state => updateSidebar(state))
        store.subscribe('profile', state => updateProfile(state))
    }, [])

    return (
        <StoreData.Provider value={{ sidebar, profile }}>
            {children}
        </StoreData.Provider>
    )
}

export default StoreProvider
