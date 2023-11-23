<template>
  <h1>Hello</h1>

  <!-- 위는 마지막 -->
  <!-- 아래는 이전 실습 -->
  <!-- <h1 :class="$attrs.class" :style="$attrs.style" @click="$attrs.onClick">Hello</h1> -->
  <!-- <h1 v-bind="$attrs">Hello</h1> -->
  <!-- <h2 @click="$attrs.onClick">Haha?!</h2> -->
  <!-- <h2>Haha?!</h2> -->
</template>

<script>
export default {
  inheritAttrs: false,
  // props: {
  //   style: Object, // 이렇게 하니까 속성들이 다 사라져버렸다...!
  // },
  mounted() {
    console.log(this.$attrs);
    // this.$attrs;
  },
};
</script>
<style scoped lang="scss">
$color: orange;
h1 {
  color: $color;
}
</style>
