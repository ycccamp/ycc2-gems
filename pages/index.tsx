import { NextPage } from 'next'

import AppLayout from 'layouts/app'
import Counter from 'components/counter'
import Share from 'components/share'

import UserPage from 'pageTypes/index'

const User: NextPage<UserPage> = () => (
    <AppLayout>
        <Counter />
        <Share />
    </AppLayout>
)

export default User
