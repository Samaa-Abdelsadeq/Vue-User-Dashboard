import { createRouter, createWebHistory } from "vue-router";

//lazy lodaing
const Home = () => import("../views/Home.vue");
import UsersList from "../views/UsersList.vue";
import UserDetails from "../views/UserDetails.vue";
import UserForm from "../views/UserForm.vue";
import NotFound from "../views/NotFound.vue";
import UserUpdate from "../views/UserUpdate.vue";



const routes = [
    { path: "/", component: Home, alias: "/home" },
    { path: "/userslist", component: UsersList },
    { path: "/userslist/:id", component: UserDetails },
    { path: "/userform", component: UserForm },
    { path: "/userupdate/:id", component: UserUpdate },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
        meta: {
            hideNavBar: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
