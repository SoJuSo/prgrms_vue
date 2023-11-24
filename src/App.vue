<template>
  <h1>
    {{ msg }}
  </h1>
  <h1>{{ name }}</h1>
  <!-- Hello 컴포넌트의 msg를 v-model으로 양방향 데이터 바인딩을 한다. -->
  <Hello v-model:message="msg" v-model:name="name" />
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
      name: "Leon..",
    };
  },
};
</script>
