<template>
  <h1>Parent</h1>
  <Child />
</template>

<script>
import Child from "~/components/Child";
export default {
  components: {
    Child,
  },
  // props: {
  //   msg: {
  //     type: String,
  //     default: "",
  //   },
  // },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
