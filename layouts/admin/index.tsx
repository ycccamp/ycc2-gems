import { useState, Fragment, useEffect } from 'react'

import firebase, { useStorage } from 'libs/firebase'

import Loader from 'components/loader'

import './admin-layout.styl'

const AdminLayout = ({ children }) => {
    let [isAdmin, updateAdmin] = useState(undefined),
        [targetExist, updateExistance] = useState(undefined),
        [targetProfileImage, updateTargetProfileImage] = useState('')

    useEffect(() => {
        firebase().then(({ auth, firestore }) => {
            auth.onAuthStateChanged(async (user) => {
                try {
                    if(!user) return

                    let { uid } = user

                    let adminDoc = await firestore
                            .collection('admins')
                            .doc('gems')
                            .get(),
                        isAdmin = (adminDoc.data().users as string[]).includes(
                            uid
                        )

                    if (isAdmin) updateAdmin(true)
                    else return updateAdmin(false)

                    let { useRouter } = await import('next/router'),
                        {
                            query: { targetUid },
                        } = useRouter()

                    let avatarDoc = await firestore
                        .collection('registration')
                        .doc(targetUid as string)
                        .collection('forms')
                        .doc('avatar')
                        .get()

                    updateExistance(avatarDoc.exists)

                    let { fileName } = await avatarDoc.data()

                    let storage = await useStorage()

                    let profileImagePath: string = await storage
                        .ref(`/registation/profile/${targetUid}/${fileName}`)
                        .getDownloadURL()

                    updateTargetProfileImage(profileImagePath)
                } catch (error) {
                    console.warn(error)
                }
            })
        })
    }, [])

    switch (true) {
        case typeof isAdmin !== 'undefined' && !isAdmin:
            return <h1 id="admin-error">Permission Denied</h1>

        case typeof isAdmin === 'undefined' ||
            typeof targetExist === 'undefined':
            return (
                <Fragment>
                    <Loader />
                    <figure id="admin-target" style={{ display: 'none' }}>
                        <img
                            className="image"
                            src={targetProfileImage}
                            alt="Target Profile Image"
                            style={{
                                display: !targetProfileImage ? 'none' : '',
                            }}
                        />
                    </figure>
                    <section style={{ display: 'none' }}>{children}</section>
                </Fragment>
            )

        case !targetExist:
            return <h1 id="admin-erro">Target not existed</h1>

        default:
            return (
                <Fragment>
                    <figure id="admin-target">
                        <img
                            className="image"
                            src={targetProfileImage}
                            alt="Target Profile Image"
                            style={{
                                display: !targetProfileImage ? 'none' : '',
                            }}
                        />
                    </figure>
                    <section>{children}</section>
                </Fragment>
            )
    }
}

export default AdminLayout
