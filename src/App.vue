<template>
  <h1>
    {{ msg }}
  </h1>
  <!-- <Hello>Hello Vue?</Hello> -->
  <Hello>
    <h2>Hello Vue?</h2>
    <p>The brown fox!</p>
  </Hello>
  <Btn>Click me!</Btn>
  <Btn></Btn>
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
};
</script>
