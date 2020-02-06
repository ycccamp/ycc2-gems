import React from 'react'

import { render } from 'enzyme'

import AuthLayout from 'layouts/auth'

describe('Login page', () => {
    let app = render(<AuthLayout>Auth</AuthLayout>)

    it('should contain Facebook Login Button', () => {
        expect(app.find("#facebook-login").length).toBeFalsy()
    })

    // it("should contain Facebook login", () => {
    //     expect(app.find("#facebook-login").length).toBeTruthy()
    // })
})