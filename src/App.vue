<template>
  <div v-if="!isEdit">
    {{ msg }}
    <button @click="onEdit">Edit!</button>
  </div>
  <div v-else>
    <input ref="editor" v-model="msg" type="text" @keyup.enter="isEdit = false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      msg: "Hello Vue!",
    };
  },
  methods: {
    onEdit() {
      this.isEdit = true;
      // 바로 보려고 하니까 에러가 난다.
      // setTimeout(() => {
      this.$nextTick(() => {
        this.$refs.editor.focus();
      }, 0); //callstack을 통해서 이 호출은 뒤로 밀린다.
    },
  },
};
</script>
