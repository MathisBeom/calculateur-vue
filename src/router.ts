import { createRouter, createWebHistory } from "vue-router";
const Surface = () => import("./pages/surface/surface.vue");
const Comparaison = () => import("./pages/comparaison/comparaison.vue");
const Configuration = () => import("./pages/configuration/configuration.vue");

const routes = [
  {
    path: "/",
    redirect: "/surface",
  },
  {
    name: "surface",
    path: "/surface",
    component: Surface,
  },
  {
    name: "comparaison",
    path: "/comparaison",
    component: Comparaison,
  },
  {
    name: "configuration",
    path: "/configuration",
    component: Configuration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
