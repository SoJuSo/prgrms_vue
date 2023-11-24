<template>
  <!-- <h1 @click="currentComponent = 'World'">
    {{ msg }}
  </h1> -->
  <button @click="currentComponent = 'Hello'">Hello!</button>
  <button @click="currentComponent = 'World'">World!</button>
  <!-- 아래 방법은 동적이지 않다. -->
  <!-- <component is="Hello" />  -->
  <!-- 그래서 아래처럼 해줘야한다. -->
  <!-- <component :is="currentComponent" /> -->
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script>
import Hello from "~/components/Hello";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue!",
      currentComponent: "Hello",
    };
  },
};
</script>
