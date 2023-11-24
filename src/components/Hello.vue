<template>
  <h1>Hello</h1>
  <h1 ref="world">World</h1>
</template>
<!-- <h1 id="hello">Hello</h1> -->
<!-- <h1 ref="hello">Hello</h1> -->

<!-- <script>
export default {
  mounted() {
    // 당연히 created()에서는 안되겠지?
    // const h1El = document.querySelector("#hello");
    const h1El = this.$refs.hello;
    console.log(h1El);
  },
};
</script> -->

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
