import { auth as authen } from "firebase/app"
import { auth } from "libs/firebase"

import "./facebookButton.styl"

const FacebookLoginButton = () => {
	let loginWithFacebook = () => {
		let provider =
			process.env.NODE_ENV === "development"
				? new authen.GoogleAuthProvider()
				: new authen.FacebookAuthProvider()

		auth.signInWithPopup(provider).catch(error => {
			console.warn(error)
		})
	}

	return (
		<button id="facebook-login" onClick={() => loginWithFacebook()}>
			<img
				className="icon"
				src="/images/facebook_icon.png"
				alt="Facebook's Icon"
			/>
			<p className="detail">Continue with Facebook</p>
		</button>
	)
}

export default FacebookLoginButton
