import { useCallback, useRef, useState } from 'react'

import AdminLayout from 'layouts/admin'

import firebase from 'libs/firebase'

import './admin.styl'

const Admin = () => {
    let [isPending, updatePending] = useState(false)

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

        if (!gemstoneDoc.exists){
            updatePending(false)
            return targetRef.set({
                amount: add.current,
            })
        }

        let { amount } = await gemstoneDoc.data()

        await targetRef.set({
            amount: amount + add.current,
        })

        updatePending(false)
    }, [])

    return (
        <AdminLayout>
            <form
                id="admin-form"
                className={isPending ? '-pending' : ''}
                onSubmit={() => updateGemstone(event)}
            >
                <input
                    className="text-box"
                    type="number"
                    placeholder="Gemstone"
                    onChange={event =>
                        (add.current = parseInt(event.target.value, 10))
                    }
                    required
                    disabled={isPending}
                />
                <button className="submit" disabled={isPending}>
                    {!isPending ? 'add' : '...'}
                </button>
            </form>
        </AdminLayout>
    )
}

export default Admin
