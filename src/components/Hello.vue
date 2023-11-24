<template>
  <!-- 동작은 되지만 emit에 please가 선언되어있지 않은 에러 발생 -->
  <h1 @click="$emit('please')">{{ message }}</h1>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  emits: ["please"], // 등록 없이도 사용할 수 있지만 명확하게 명시해주는 것이 좋다.
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
