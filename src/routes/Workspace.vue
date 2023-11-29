<template>
  <!-- <h1>{{ $route.params.id }}</h1> -->
  <section>
    <div class="inner">
      <!-- v-model 사용 불가 -->
      <div ref="title" class="title" contenteditable @input="onInput">
        {{ title }}
      </div>
      <div ref="content" class="content" contenteditable @input="onInput" v-html="content"></div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.workspace.currentWorkspace.title;
    },
    content() {
      return this.$store.state.workspace.currentWorkspace.content;
    },
  },
  created() {
    this.$store.dispatch("workspace/readWorkspace", {
      id: this.$route.params.id,
    });
  },
  methods: {
    onInput() {
      // console.log(this.$refs.title.textContent);
      // console.log(this.$refs.content.innerHTML);
      this.$store.dispatch("workspace/updateWorkspace", {
        id: this.$route.params.id,
        title: this.$refs.title.textContent,
        content: this.$refs.content.innerHTML,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0 200px;
  .inner {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
    [contenteditable] {
      outline: none;
      cursor: text;
      &.title {
        font-size: 44px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      &.content {
        font-size: 16px;
        line-height: 1.8;
      }
    }
  }
}
</style>
