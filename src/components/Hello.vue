<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  created() {
    console.log("Hello Created!");
  },
  unmounted() {
    console.log("Hello Unmounted!");
  },
};
</script>
<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
