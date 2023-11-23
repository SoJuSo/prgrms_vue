<template>
  <h1>{{ id }} / {{ title }} / {{ email }}</h1>
</template>

<script>
export default {
  props: {
    // 경고의 원인은 default 값이 없어서인가?
    id: Number,
    title: String,
    email: {
      type: String,
      default: "123@123.com",
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
