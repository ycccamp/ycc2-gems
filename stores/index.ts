import Store from "arkflows"

const store = new Store()

store.create("sidebar", {
    isShowing: false
})

store.create("profile", {
    isShowing: false
})

export default store