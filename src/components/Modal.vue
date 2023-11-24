<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <teleport to="body">
    <template v-if="modelValue">
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
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 400,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  //   data() {
  //     return {
  //     //   isShow: false,
  //     };
  //   },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
        // 익명함수 형태로 입력하면 나중에 지울 때 참조가 불가능하다.
        // 왜 ()가 아닐까, 아 아무것도 안주지
        // esc로 끄는 로직이 생각보다 위험이 있는 방식이다.
      } else {
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
  },
  methods: {
    keyupHandler(event) {
      if (event.key === "Escape") {
        console.log("ESC!!");
        this.offModal();
      }
    },
    onModal() {
      // 밖에서 들어온 데이터라서 여기서 수정이 불가능하다. $emit을 사용하자.
      //   this.isShow = true;
      this.$emit("update:modelValue", true);
    },
    offModal() {
      //   this.isShow = false;
      this.$emit("update:modelValue", false);
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
