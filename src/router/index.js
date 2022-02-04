import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/information",
    name: "Qui sommes-nous",
  },
  {
    path: "/gallerie",
    name: "Gallery",
    component: () => import("../views/Gallery/Gallery.vue"),
  },
  {
    path: "/horaires",
    name: "Horaires",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
