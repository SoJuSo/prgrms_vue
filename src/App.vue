<template>
  <h1>
    {{ msg }}
  </h1>
  <!-- props를 통해서 데이터를 내려줄 수 있다. -->
  <Hello :message="msg" @please="reverseMsg" />
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
  methods: {
    reverseMsg() {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
