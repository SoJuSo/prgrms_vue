<template>
  <div class="app__inner">
    <LNB />
    <div class="app__page">
      <div class="page__header"></div>
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import LNB from "~/components/LNB";

export default {
  components: {
    LNB,
  },
};
</script>

<style lang="scss" scoped>
// @import "~/scss/_variables";
.app__inner {
  display: flex;
  height: 100vh;
  color: $color-font;
  font-size: 14px; // 후손에 적용됨.
  line-height: 1.4;
  font-family: "Noto Sans KR", sans-serif;

  .app__page {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    .page__header {
      height: 80px;
    }
    .page__container {
      overflow-y: scroll;
      flex-grow: 1;
    }
  }
}
</style>

<script></script>
