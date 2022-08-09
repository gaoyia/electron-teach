import { createRouter, createWebHashHistory } from "vue-router"
import index from "./view/index.vue";
import path from "./view/path.vue";

const menu = [
    {
        name: "index",
        title: "首页",
        path: "/",
        component: index,
    },
    {
        name: "path",
        title: "path",
        path: "/path",
        component: path,

    }
]

const routes = [
    ...menu,
    {
        path: "/:catacAll(.*)*",
        redirect: "/"
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})

