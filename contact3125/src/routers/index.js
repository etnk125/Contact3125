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
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "Login ", component: Login },
  { path: "/contact", name: "Contact ", component: Contact },
  { path: "/contact/add", name: "AddContact ", component: AddContact },
  { path: "/contact/edit/:id", name: "EditContact ", component: EditContact },
  { path: "*", name: "Notfound ", component: Notfound },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
