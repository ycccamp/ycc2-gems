import React from 'react'

import { shallow } from 'enzyme'

import AuthLayout from 'layouts/auth'

import FacebookButton from 'components/core/facebookButton'

describe('Login page', () => {
    it('contains Facebook Login Button', () => {
        let app = shallow(<AuthLayout>Auth</AuthLayout>)

        expect(app.find(<FacebookButton />)).toBeTruthy()
    })
})