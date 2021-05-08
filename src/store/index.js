import { createStore } from "vuex"
import Users from './Users'



const store = createStore({
    modules: {
        Users
    },
    // plugins: [myPlugin]
})

export default store