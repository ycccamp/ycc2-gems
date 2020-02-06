import { memo, FunctionComponent } from 'react'

import CardImageProps from './cardImage'

import './card-image.styl'

const CardImage: FunctionComponent<CardImageProps> = memo(({ src }) => (
    <figure className="card-figure">
        <img className="image" src={src} />
    </figure>
))

export default CardImage
