import { createRouter, createWebHistory } from "vue-router";
// import page
import Login from "../views/pages/Login.vue";
import AddContact from "../views/pages/AddContact.vue";
import EditContact from "../views/pages/EditContact.vue";
import ContactIndex from "../views/pages/ContactIndex.vue";
import Notfound from "../views/pages/Notfound.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login", component: Login },
  { path: "/contact/add", name: "ContactAdd", component: AddContact },
  { path: "/contact/:id/edit", name: "ContactEdit", component: EditContact },
  { path: "/contact", name: "ContactIndex", component: ContactIndex },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: Notfound },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
