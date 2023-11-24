<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello />
</template>

<script>
import Hello from "~/components/Hello";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
  created() {
    // this.$fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => console.log(res));
    // this.$fetch("https://jsonplaceholder.typicode.com/todos/1");
    this.init();
  },
  methods: {
    async init() {
      const res = await this.$fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log(res, "Done!");
    },
  },
};
</script>
