<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <teleport to="body">
    <template v-if="isShow">
      <div class="modal" @click="offModal">
        <div :style="{ width: `${parseInt(width, 10)}px` }" class="modal__inner" @click.stop>
          <!-- 기본값이 false라 따로 옵션을 지정해줄 필요가 있다. -->
          <!-- 버튼을 오른쪽 위로 보내주자 -->
          <button v-if="closeable" @click="offModal" class="close">x</button>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 400,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onModal() {
      this.isShow = true;
    },
    offModal() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 10px 10px rgba(black, 0.2);
    button.close {
      float: right;
    }
  }
}
</style>
