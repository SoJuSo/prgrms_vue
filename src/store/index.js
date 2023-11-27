import { createStore } from "vuex";
export default createStore({
  state() {
    // 데이터는 항상 함수로 만들어야함을 잊지말자.
    return {
      msg: "Hello Vue?!",
      count: 1,
    };
  }, //데이터
  getters: {
    reversedMsg(state) {
      return state.msg.split("").reverse().join("");
    },
  }, // 계산된 상태의 데이터(computed와 유사)
  mutations: {
    increaseCount(state) {
      state.count += 1;
    },
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    },
  }, // 데이터 변경 수정
  actions: {
    //context => state, getters, commit, dispatch를 제공받는 내장함수가 있다.
    // 꺼내서 쓰자.
    async fetchTodo({ commit }) {
      const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
      console.log(todo);
      //   updateMsg(this.state, todo.title);
      //   context.commit("updateMsg", todo.title);
      commit("updateMsg", todo.title);
    },
  }, // 이외 모든 로직
});
