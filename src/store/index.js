import { reactive } from "vue";
// export const state = {
//   msg: "Hello Vue?!",
//   count: 1,
// };

// 반응성 있게 만들어보자
export const state = reactive({
  msg: "Hello Vue?!",
  count: 1,
});

export const getters = {
  reversedMsg() {
    return state.msg.split("").reverse().join("");
  },
};

// 얘는 순수한 데이터의 변경, 추적만
export const mutations = {
  increaseCount() {
    state.count++;
  },
  decreaseCount() {
    state.count--;
  },
  updateMsg(newMsg) {
    state.msg = newMsg;
  },
};

// 얘는 나머지 다~ ex) 비동기 처리
// 내용을 분리해서 관리하는 것이다.
export const actions = {
  async fetchTodo() {
    const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
    console.log(todo);
    mutations.updateMsg(todo.title);
  },
};
