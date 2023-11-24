<template>
  <div>
    <h1 @click="$emit('please', 7)">Please</h1>
    <!-- 아래와 같이 커스텀하게 입력해줄 수 있다. -->
    <h1 @click="$emit('click')">Click</h1>
  </div>
</template>

<script>
export default {
  emits: {
    click: null,
    please: (number) => {
      if (number > 10) {
        return true;
      } else {
        // 7으로 바꾸면 실행은 되지만 에러가 난다/
        console.error("number is not greater than 10");
        return false;
      }
    },
  },
  // 아래와 같이 배열로도 가능하고
  // emits: ["click", "please"], //emit으로 js 이벤트를 등록하면 native이벤트를 custom이벤트로 덮어쓴다.
  // 그래서 덮어쓰여지기 때문에 아무런 동작을 하지 않는다. 등록된 곳도 없으니
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
