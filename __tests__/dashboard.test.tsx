import React from 'react'

import { render } from 'enzyme'

import DashboardLayout from 'layouts/dashboard'

describe('Dashboard', () => {
    let app = render(
        <DashboardLayout>
            <p id="children">Dashboard</p>
        </DashboardLayout>
    )

    it('should contain Sidebar', () => {
        expect(app.find('#sidebar')).toBeTruthy()
    })

    it('should contain children', () => {
        expect(app.find('#children').length).toEqual(1)
    })
})
