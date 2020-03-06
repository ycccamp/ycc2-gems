import { Fragment } from 'react'

import Head from 'next/head'

import AppLayout from 'layouts/app'
import Counter from 'components/counter'
import Share from 'components/share'

const User = () => (
    <Fragment>
        <Head>
            <title>Gemstone</title>
        </Head>
        <AppLayout>
            <Counter />
            <Share />
        </AppLayout>
    </Fragment>
)

export default User
