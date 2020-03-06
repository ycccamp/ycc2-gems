import { useEffect, useState, createContext, useContext } from 'react'

import store from 'stores'

import { persistedUserState } from './helpers'

const Store = createContext(null)

const StoreProvider = ({ children }) => {
    let [user, updateUser] = useState(persistedUserState)

    useEffect(() => {
        store.subscribe('user', user => updateUser(user))
    }, [])

    return <Store.Provider value={{ user }}>{children}</Store.Provider>
}

export const useStore = () => useContext(Store)
export default StoreProvider
