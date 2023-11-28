<template>
  <h1>
    {{ msg }}
  </h1>
  <h2>{{ StoreMsg }} / {{ storeMessege }}</h2>
  <Hello />
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
    };
  },
  computed: {
    StoreMsg() {
      return this.$store.state.msg;
    },
    storeMessege() {
      return this.$store.state.message.message; //모듈의 이름을 명시해주고 그 다음에 데이터에 접근해야한다.
    },
  },
};
</script>
