import store from 'stores'

const toggleProfile = () =>
    store.update('profile', {
        isShowing: true,
    })

export default toggleProfile
