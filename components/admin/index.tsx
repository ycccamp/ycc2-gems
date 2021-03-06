import { useCallback, useRef, useState } from 'react'

import AdminLayout from 'layouts/admin'

import firebase from 'libs/firebase'

import './admin.styl'

const Admin = () => {
    let [isPending, updatePending] = useState(false),
        [isAddMode, useAddMode] = useState(true)

    let add = useRef(0)

    let updateGemstone = useCallback(async event => {
        event.preventDefault()
        if (isPending) return

        updatePending(true)

        let { firestore } = await firebase(),
            { useRouter } = await import('next/router')

        let {
            query: { targetUid },
        } = useRouter()

        let targetRef = firestore
                .collection('gemstone')
                .doc(targetUid as string),
            gemstoneDoc = await targetRef.get()

        if (!gemstoneDoc.exists) {
            updatePending(false)
            return targetRef.set({
                amount: add.current,
            })
        }

        let { amount = 0 } = await gemstoneDoc.data()

        if(!isNaN(add.current))
            if(isAddMode)
                await targetRef.set({
                    amount: amount + add.current,
                })
            else
                await targetRef.set({
                    amount: amount - add.current,
                })

        updatePending(false)
    }, [isAddMode])

    return (
        <AdminLayout>
            <form
                id="admin-form"
                className={isPending ? '-pending' : ''}
                onSubmit={() => updateGemstone(event)}
            >
                <input
                    className="text-box"
                    type="tel"
                    placeholder="Gemstone"
                    onChange={event =>
                        (add.current = parseInt(event.target.value, 10))
                    }
                    required
                    disabled={isPending}
                />
                <button
                    className={`submit ${!isAddMode ? '-minus-mode' : ''}`}
                    disabled={isPending}
                >
                    {!isPending ? (isAddMode ? 'add' : 'minus') : '...'}
                </button>
            </form>
            <button id="admin-mode" onClick={() => useAddMode(!isAddMode)}>
                {isAddMode ? 'Minus mode' : 'Add mode'}
            </button>
        </AdminLayout>
    )
}

export default Admin
