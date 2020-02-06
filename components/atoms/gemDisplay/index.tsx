import { memo, FunctionComponent } from 'react'

import "./profile-card.styl"

import GemProps from './types'

const GemDisplay:FunctionComponent<GemProps> = memo(({ gems }) => (
    <section id="gem-section">
        <h2 className="gemstone">{gems}</h2>
        <h1 className="unit">Gemstone</h1>
    </section>
))

export default GemDisplay