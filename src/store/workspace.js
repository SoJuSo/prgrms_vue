import router from "~/routes";

export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
      currentWorkspace: {},
      currentWorkspacePath: [],
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
      const workspace = await _request({
        method: "POST",
        body: JSON.stringify({ title: "", parent: parentId }),
      });
      await dispatch("readWorkspaces");
      router.push({
        name: "Workspace",
        params: {
          id: workspace.id,
        },
      });
    },
    async readWorkspaces({ commit, dispatch }) {
      const workspaces = await _request({
        method: "GET",
      });
      console.log(workspaces);
      commit("assignState", {
        workspaces: workspaces,
      });
      dispatch("findWorkspacePath");
      if (!workspaces.length) {
        dispatch("createWorkspace");
      }
    },
    async readWorkspace({ commit }, payload) {
      const { id } = payload;
      try {
        const workspace = await _request({
          method: "GET",
          id,
        });
        // console.log(workspace);
        commit("assignState", {
          currentWorkspace: workspace,
        });
      } catch (error) {
        router.push("/error");
      }
    },
    async updateWorkspace({ dispatch }, payload) {
      const { id, title, content } = payload;
      await _request({
        id,
        method: "PUT",
        body: JSON.stringify({
          title,
          content,
        }),
      });
      dispatch("readWorkspaces");
    },
    async deleteWorkspace({ state, dispatch }, payload) {
      const { id } = payload;
      await _request({
        method: "DELETE",
      });
      await dispatch("readWorkspaces");
      if (id === parseInt(router.currentRoute.value.params.id, 10)) {
        router.push({
          name: "Workspace",
          params: {
            id: state.workspaces[0].id,
          },
        });
      }
    },
    findWorkspacePath({ state, commit }) {
      const currentWorkspaceId = parseInt(router.currentRoute.value.params.id, 10);
      function _find(workspace, parents) {
        if (currentWorkspaceId === workspace.id) {
          commit("assignState", {
            currentWorkspacePath: [...parents, workspace],
          });
        }
        if (workspace.documents) {
          // Recursive
          workspace.documents.forEach((ws) => _find(ws, [...parents, workspace]));
        }
      }
      state.workspaces.forEach((workspace) => _find(workspace, []));
    },
  },
};

async function _request(options) {
  const { id = "" } = options;
  return await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-username": "ksj-notion-cloning",
    },
  }).then((res) => res.json());
}
