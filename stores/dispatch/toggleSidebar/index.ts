import store from "stores"

const toggleSidebar = () =>
    store.set('sidebar', {
        isShowing: !store.get('sidebar').isShowing,
    })

export default toggleSidebar