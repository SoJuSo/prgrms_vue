<template>
  <h1>Hello</h1>
  <!-- 아무것도 없으면 문자, v-bind 사용 시 숫자 -->
  <slot :hello="123"></slot>
  <slot name="abc"></slot>
</template>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
