import { memo, Fragment } from "react"

import "./loading-layout.styl"

const LoginLayout = memo(({ children }) => (
	<Fragment>		
		<main id="loading-layout">
			<img id="ycc-loading-icon" src="/images/ycc-icon.png" alt="YCC's icon" />
		</main>
		{ children }
	</Fragment>
))

export default LoginLayout