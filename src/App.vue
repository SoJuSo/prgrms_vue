<template>
  <button @click="reverseMsg">Click!</button>
  <Hello :message="msg" :name="123" />
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
