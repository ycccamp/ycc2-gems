import React from "react"
import { shallow } from "enzyme"

import AuthLayout from "layouts/auth"

import FacebookButton from "components/core/facebookButton"

describe("Login page", () => {
    it("contain Facebook Login Button", () => {
        const app = shallow(<AuthLayout />)

        expect(app.find(FacebookButton)).toBeTruthy()
    })
})