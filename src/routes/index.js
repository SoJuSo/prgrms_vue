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
import Home from "./Home";
import About from "./About";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // return { top: 0 };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 500);
    });
  },
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
