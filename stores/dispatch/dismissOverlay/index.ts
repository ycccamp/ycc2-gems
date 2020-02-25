import store from 'stores'

const dismissOverlay = () => {
    store.update('profile', {
        isShowing: false,
    })
    store.update('sidebar', {
        isShowing: false,
    })
}

export default dismissOverlay
