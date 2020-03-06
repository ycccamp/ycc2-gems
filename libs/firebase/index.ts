const firebase = async () => {
    let firebase = await import('firebase/app')
    await import('firebase/auth')
    await import('firebase/firestore')

    if (!firebase.apps.length)
        firebase.initializeApp({
            apiKey: 'AIzaSyBoT3SIWbgGNf7QEqMIL8p3mHUWe7y-HuI',
            authDomain: 'ycc2020.firebaseapp.com',
            databaseURL: 'https://ycc2020.firebaseio.com',
            projectId: 'ycc2020',
            storageBucket: 'ycc2020.appspot.com',
            messagingSenderId: '959291668430',
            appId: '1:959291668430:web:2652b50a796526c0879d9f',
            measurementId: 'G-RFPCP58W9D',
        })

    let firestore = firebase.firestore(),
        auth = firebase.auth()

    return { provider: new firebase.auth.FacebookAuthProvider(), firestore, auth }
}

export const useStorage = async () => {
    let firebase = await import('firebase/app')
    await import('firebase/storage')

    if (!firebase.apps.length)
        firebase.initializeApp({
            apiKey: 'AIzaSyBoT3SIWbgGNf7QEqMIL8p3mHUWe7y-HuI',
            authDomain: 'ycc2020.firebaseapp.com',
            databaseURL: 'https://ycc2020.firebaseio.com',
            projectId: 'ycc2020',
            storageBucket: 'ycc2020.appspot.com',
            messagingSenderId: '959291668430',
            appId: '1:959291668430:web:2652b50a796526c0879d9f',
            measurementId: 'G-RFPCP58W9D',
        })

    return firebase.storage()
}

export default firebase
