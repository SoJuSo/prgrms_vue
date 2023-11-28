export default {
  namespaced: true, // 이름 범위라는 것을 가져야 한다.
  state() {
    return {
      message: "Hello Store Module~",
    };
  },
  getters: {
    reversedMessage(state) {
      return state.message.split("").reverse().join("");
    },
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    async fetchTodo(context) {
      const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
      console.log(todo);
      context.commit("updateMessage", todo.title);
    },
  },
};
