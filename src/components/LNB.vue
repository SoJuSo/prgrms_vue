<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      석주's Notion
    </div>
    <ul>
      <!-- <li v-for="workspace in workspaces" :key="workspace.id">{{ workspace.title }}</li> -->
      <WorkspaceItem v-for="workspace in workspaces" :key="workspace.id" :workspace="workspace" />
    </ul>
    <div class="actions"></div>
  </nav>
</template>

<script>
import WorkspaceItem from "~/components/WorkspaceItem.vue";

export default {
  components: {
    WorkspaceItem,
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces;
    },
  },
  created() {
    this.$store.dispatch("workspace/readWorkspaces");
  },
};
</script>

<style lang="scss" scoped>
// @import "~/scss/_variables";
// @use "sass:color";
nav {
  background-color: $color-background;
  width: 240px;
  height: 100%;
  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
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
  }

  .actions {
  }
}
</style>
