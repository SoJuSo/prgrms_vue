<template>
  <nav ref="nav" :style="{ width: `${navWidth}px` }">
    <div class="header">
      <div class="user-profile"></div>
      석주's Notion
    </div>
    <ul>
      <!-- <li v-for="workspace in workspaces" :key="workspace.id">{{ workspace.title }}</li> -->
      <WorkspaceItem v-for="workspace in workspaces" :key="workspace.id" :workspace="workspace" />
    </ul>
    <div class="actions">
      <div class="action" @click="$store.dispatch('workspace/createWorkspace')">
        <span class="material-icons">add</span>
        새로운 페이지
      </div>
    </div>
    <div ref="resizeHandle" class="resize-handle" @dblclick="navWidth = 240"></div>
  </nav>
</template>

<script>
import interact from "interactjs";
import WorkspaceItem from "~/components/WorkspaceItem.vue";

export default {
  components: {
    WorkspaceItem,
  },
  data() {
    return {
      navWidth: 240,
    };
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces;
    },
  },
  created() {
    this.workspacesInit();
  },
  mounted() {
    this.navInit();
  },
  methods: {
    async workspacesInit() {
      await this.$store.dispatch("workspace/readWorkspaces");
      console.log(this.$store.state.workspace.currentWorkspacePath);
    },
    navInit() {
      interact(this.$refs.nav)
        .resizable({
          edges: {
            right: this.$refs.resizeHandle,
          },
        })
        .on("resizemove", (event) => {
          this.navWidth = event.rect.width;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "~/scss/_variables";
// @use "sass:color";
nav {
  min-width: 160px;
  max-width: 500px;
  flex-shrink: 0;
  background-color: $color-background;
  // width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    // overflow: hidden;
    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory2.daumcdn.net%2Ftistory%2F3964788%2Fattach%2F4f3424a083174d5fa9101588e726e35e");
      background-size: cover;
    }
  }

  ul {
    flex-grow: 1;
    overflow-x: auto;
    overflow-y: scroll;
    // border: 4px solid;
  }

  .actions {
    border-top: 1px solid $color-border;
    .action {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 14px;
      color: $color-icon;
      cursor: pointer;
      &:hover {
        background-color: $color-background--hover1;
      }
      .material-icons {
        margin-right: 4px;
        color: $color-icon;
      }
    }
  }
  .resize-handle {
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    cursor: col-resize;
    transition: 0.4s;
    &:hover {
      background-color: $color-border;
    }
  }
}
</style>
