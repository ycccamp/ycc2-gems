import { isServer } from 'libs/helpers'

export const persistedUserData = !isServer
        ? JSON.parse(localStorage.getItem('user'))
        : undefined,
    persistedUserState =
        typeof persistedUserData !== 'undefined' && persistedUserData !== null
            ? persistedUserData
            : {}
