import { createRouter, createWebHistory } from "vue-router";
// import page
import Login from "../views/Login.vue";
import ContactIndex from "../views/ContactIndex.vue";
import ContactAdd from "../views/ContactAdd.vue";
import ContactEdit from "../views/ContactEdit.vue";
import Notfound from "../views/Notfound.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login", component: Login },
  { path: "/contact", name: "ContactIndex", component: ContactIndex },
  { path: "/contact/add", name: "ContactAdd", component: ContactAdd },
  { path: "/contact/:id/edit", name: "ContactEdit", component: ContactEdit },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: Notfound },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
