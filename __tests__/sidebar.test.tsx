import React from 'react'

import * as nextRouter from 'next/router'

import { render } from 'enzyme'

import SideTab from 'components/atoms/sideTab'
import SidebarDivider from 'components/atoms/sidebarDivider'
import SidebarContainer from 'components/atoms/sidebarContainer'

describe('Sidebar', () => {
    let NextRouter:any = nextRouter
    NextRouter.useRouter = jest.fn()
    NextRouter.useRouter.mockImplementation(() => ({ pathname: '/settings' }))

    let MockSidebar = render(
        <SidebarContainer>
            <SidebarDivider />
            <SideTab href="/">Hello</SideTab>
            <SideTab href="/hello">World</SideTab>
        </SidebarContainer>
    )

    it('can contain divider accurately', () => {
        expect(MockSidebar.find('.sidebar-divider').length).toEqual(1)
    })

    it('can contains amount of SideTab accurately', () => {
        expect(MockSidebar.find('.side-tab').length).toEqual(2)
    })
})