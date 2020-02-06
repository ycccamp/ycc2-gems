import LandingLayout from "layouts/landing"

import GemDisplay from "components/atoms/gemDisplay"

const Landing = () => (
    <LandingLayout>
        <GemDisplay gems={1000} />
    </LandingLayout>
)

export default Landing