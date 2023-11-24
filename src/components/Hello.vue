<template>
  <!-- 속성의 이름만 있으면 값이 true이다. -->
  <Modal closeable>
    <template #activator>
      <h1>Hello</h1>
    </template>
    <h3>Hello.vue</h3>
    <textarea v-model="msg"></textarea>
    <!-- 포커스를 해주고 싶다. -->
    <button @click="submit">Submit!</button>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      msg: "Please enter the text.",
    };
  },
  methods: {
    submit() {
      console.log(this.msg);
    },
  },
};
</script>
<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
