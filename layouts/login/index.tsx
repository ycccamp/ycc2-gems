import FacebookButton from "components/core/facebookButton"

import "./login-layout.styl"

const LoginLayout = () => (
	<main id="login-layout">
		<img id="ycc-icon" src="/images/ycc-icon.png" alt="YCC's icon" />
		<section className="display">
			<FacebookButton />
		</section>
	</main>
)

export default LoginLayout