export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    // 기본값 설정 payload = {}
    async createWorkspace({ dispatch }, payload = {}) {
      const { parentId } = payload;
      await fetch("https://kdt-frontend.programmers.co.kr/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-username": "ksj-notion-cloning",
        },
        body: JSON.stringify({ title: "", parent: parentId }),
      }).then((res) => res.json());
      await dispatch("readWorkspaces");
    },
    async readWorkspaces({ commit }) {
      const workspaces = await fetch("https://kdt-frontend.programmers.co.kr/documents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-username": "ksj-notion-cloning",
        },
      }).then((res) => res.json());
      console.log(workspaces);
      commit("assignState", {
        workspaces: workspaces,
      });
    },
    readWorkspace() {},
    updateWorkspace() {},
    async deleteWorkspace({ dispatch }, payload) {
      const { id } = payload;
      await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-username": "ksj-notion-cloning",
        },
      }).then((res) => res.json());
      dispatch("readWorkspaces");
    },
  },
};
