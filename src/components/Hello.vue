<template>
  <label>
    <!-- 이제 에러는 안나지만 데이터가 안바뀐다. -->
    <!-- modelValue라고 명시해주어야함. -->
    <!-- <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
    <input :value="message" @input="$emit('update:message', $event.target.value)" />
  </label>
  <label>
    <input :value="name" @input="$emit('update:name', $event.target.value)" />
  </label>
</template>

<script>
export default {
  props: {
    // modelValue << v-model에서 온 것..?
    // modelValue: {
    //   type: String,
    //   default: "",
    // },
    // modelValue를 쓰고 싶지 않다면..?
    message: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
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
