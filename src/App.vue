<template>
  <h1>{{ msg }}</h1>
  <Hello />
</template>

<script>
// import Hello from "./components/Hello.vue"; //이게 문제가 될 수 있다.
import Hello from "~/components/Hello"; // ?????????????
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Webpack?..",
    };
  },
};
</script>
