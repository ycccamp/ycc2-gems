import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBoT3SIWbgGNf7QEqMIL8p3mHUWe7y-HuI",
	authDomain: "ycc2020.firebaseapp.com",
	databaseURL: "https://ycc2020.firebaseio.com",
	projectId: "ycc2020",
	storageBucket: "ycc2020.appspot.com",
	messagingSenderId: "959291668430",
	appId: "1:959291668430:web:2652b50a796526c0879d9f",
	measurementId: "G-RFPCP58W9D"
}
// Initialize Firebase
if (!firebase.apps.length)
	firebase.initializeApp(firebaseConfig) || firebase.analytics() // Do both

// Since authentication is priority, always load first
export const auth = firebase.auth()

// Lazyload
export const firestore = () => {
    require("firebase/firestore")
    return firebase.firestore()
}

export default firebase