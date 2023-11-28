import router from "./index";
import store from "~/store";

router.beforeEach((to) => {
  // to 접근하려는 페이지 정보
  // from 이전 페이지 정보
  // next 해당 페이지로 넘어가는 기능, 하지만 굳이 사용 X
  console.log(store);
  if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }
});
