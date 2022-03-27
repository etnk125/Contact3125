import { createRouter, createWebHistory } from "vue-router";
// import page
import Login from "../pages/Login.vue";
import Contact from "../pages/Contact.vue";
import AddContact from "../pages/AddContact.vue";
import EditContact from "../pages/EditContact.vue";
import Notfound from "../pages/Notfound.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: Login },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/contact/add", name: "contact-add", component: AddContact },
  { path: "/contact/edit/:id", name: "contact-edit", component: EditContact },
  { path: "/:pathMatch(.*)*", name: "not-found", component: Notfound },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
