/*
import { createRouter, createWebHashHistory } from "vue-router";
import About from "./About";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/about",
      component: About,
    },
  ],
});
*/

// HTML 5 mode
import { createRouter, createWebHistory } from "vue-router";
import About from "./About";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      component: About,
    },
  ],
});
