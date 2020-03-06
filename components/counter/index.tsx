import { useEffect, useState, Fragment } from 'react'

import { useStore } from 'stores/provider'

import firebase from 'libs/firebase'

import './counter.styl'

const Counter = () => {
    let {
        user: { uid },
    } = useStore()

    let [totalGemstone, updateGemstone] = useState<boolean | number>(false)

    useEffect(() => {
        firebase().then(({ firestore }) => {
            if (typeof uid === 'undefined' || uid === null) return

            let gemstone = firestore.collection('gemstone').doc(uid)

            gemstone.onSnapshot(docs => {
                if (!docs.exists) {
                    gemstone.set({
                        amount: 0,
                    })
                    updateGemstone(0)
                }

                updateGemstone(docs.data().amount)
            })
        })
    }, [uid])

    return (
        <Fragment>
            <h1 id="counter">
                {totalGemstone !== false ? totalGemstone : '...'}
            </h1>
            <p className="unit">Gemstone</p>
        </Fragment>
    )
}

export default Counter
