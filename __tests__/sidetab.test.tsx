import * as nextRouter from 'next/router'

import { render } from 'enzyme'

import SideTab from 'components/atoms/sideTab'

describe('SideTab', () => {
    let NextRouter:any = nextRouter
    NextRouter.useRouter = jest.fn()
    NextRouter.useRouter.mockImplementation(() => ({ pathname: '/settings' }))

    let MockSideTab = render(
        <SideTab href="/settings" icon="settings">
            Hello
        </SideTab>
    )

    it('can display icon', () => {
        expect(MockSideTab.find('.material-icons').text()).toEqual('settings')
    })
})
