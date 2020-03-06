import { Fragment } from 'react'

import Head from "next/head"

import AppLayout from "layouts/app"

import Admin from "components/admin"

const AdminPanel = () => (
    <Fragment>
        <Head>
            <title>Gemstone</title>
        </Head>
        <AppLayout>
            <Admin />
        </AppLayout>
    </Fragment>
)

export default AdminPanel