import { createStore } from "vuex";
import message from "./message";

export default createStore({
  //전역 사용

  modules: {
    message,
  },
});
