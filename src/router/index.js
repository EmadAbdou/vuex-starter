import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import User from "../views/User.vue";

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/users",
        name: "Users",
        // route level code-splitting
        // this generates a separate chunk (Users.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Users,
    },
    {
        path: "/users/:id",
        name: "User",
        component: User,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router