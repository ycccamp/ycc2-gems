import React from 'react'

import { mount } from 'enzyme'

import DashboardLayout from 'layouts/dashboard'

import Sidebar from 'components/molecules/sidebar'

describe('Dashboard', () => {
    it('contains Sidebar', () => {
        let app = mount(<DashboardLayout>Dashboard</DashboardLayout>)

        expect(app.find(<Sidebar />)).toBeTruthy()
    })
})
