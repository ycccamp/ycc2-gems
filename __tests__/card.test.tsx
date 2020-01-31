import React from 'react'

import { render } from 'enzyme'

import Card from 'components/molecules/card'

describe('Card', () => {
    it('should displayed header', () => {
        let MockCard = render(<Card header="Sushi" />)

        expect(MockCard.find('.card-header > .title').text()).toEqual('Sushi')
    })

    it('should not displayed header', () => {
        let MockCard = render(<Card />)

        expect(MockCard.find('.card-header > .title').length).toBeFalsy()
    })

    it('should displayed body', () => {
        let MockCard = render(<Card>Sushi</Card>)

        expect(MockCard.find('.body').text()).toEqual('Sushi')
    })

    it('should not displayed body', () => {
        let MockCard = render(<Card />)

        expect(MockCard.find('.body').length).toBeFalsy()
    })

    it('should displayed footer as text with chevron if footer props is string', () => {
        let MockCard = render(<Card footer="Sushi" />)

        expect(MockCard.find('.footer').text()).toEqual(
            `${'Sushi'}chevron_right`
        ) // Since chevron_right is on the same level.
    })

    it('should displayed footer as element if footer props is element', () => {
        let MockCard = render(<Card footer={<div className="mock" />} />)

        expect(MockCard.find('.mock').length).toEqual(1)
    })

    it('should displayed footer with ripple', () => {
        let MockCard = render(<Card footer="Sushi" rippleFooter />)

        expect(MockCard.find(".mdc-button").length).toBeTruthy()
    })

    it('should not displayed footer with ripple', () => {
        let MockCard = render(<Card footer="Sushi" />)

        expect(MockCard.find(".mdc-button").length).toBeFalsy()
    })

    it('should not displayed footer if not present', () => {
        let MockCard = render(<Card />)

        expect(MockCard.find('.footer').length).toBeFalsy()
    })
})
