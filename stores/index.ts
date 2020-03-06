import Store from 'arkflows'

import { isServer } from 'libs/helpers'

const store = new Store()

store.applyMiddleware((store: any, process, storeName) => {
    if (storeName === 'user' && !isServer) {
        if (process === 'create')
            return JSON.parse(localStorage.getItem('user'))

        if (process === 'set')
            localStorage.setItem('user', JSON.stringify(store))
    }

    return store
})

store.create('user', {})

export default store
