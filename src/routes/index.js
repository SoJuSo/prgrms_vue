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
import LogIn from "./LogIn";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
      meta: {
        // 필요한 정보
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      component: LogIn,
    },
  ],
});
