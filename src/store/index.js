import { createStore } from "vuex";
import message from "./message";
import count from "./count";

export default createStore({
  state() {
    return {
      msg: "Hello Vue?!",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    message,
    count, // hello: count << 이렇게도 사용 가능
  },
});
