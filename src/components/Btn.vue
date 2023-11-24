<template>
  <button>
    <!-- 따로 컨텐트가 없는 경우 슬롯 내부에 값을 사용한다. Fallback이라고 한다. -->
    <slot>Leon</slot>
  </button>
</template>
<style scoped lang="scss">
button {
  padding: 10px 20px;
  &:hover {
    background-color: orange;
    transform: scale(1.2);
  }
}
</style>
