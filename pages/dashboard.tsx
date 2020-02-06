import { Fragment } from 'react'

import DashboardLayout from "layouts/dashboard"

import Card from 'components/molecules/card'

import 'stylus/landing.styl'

const Landing = () => {
    return (
        <DashboardLayout>
            {/* Mandatory List */}
            <section className="dashboard-primary">
                <Card header="100 Gemstones" />
                <Card
                    header="History"
                    footer="History"
                    rippleFooter
                    href="history"
                >
                    View how you get and spent gemstone
                </Card>
                <Card header="Get 10 gemstone">Latest transaction</Card>
            </section>

            {/* Secondary List */}
            <section className="dashboard-secondary">
                <Card header="Gemstone" footer="History" rippleFooter>
                    Hello
                </Card>
                <Card header="Ranking" footer="History" rippleFooter>
                    See how others is doing.
                </Card>
            </section>

            {/* Notify & Guideline */}
            <section className="dashboard-tertiary">
                <Card header="Gemstone" footer="History" rippleFooter>
                    Hello
                </Card>
            </section>
        </DashboardLayout>
    )
}

export default Landing
