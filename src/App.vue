<template>
  <h1
    v-if="msg"
    class="message"
    @click="log">
    {{ msg }}
  </h1>
  <div></div>
  <div></div>
  <Hello />
</template>

<script>
// import Hello from "./components/Hello.vue"; //이게 문제가 될 수 있다.
import Hello from '~/components/Hello' // ?????????????
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello Webpack?..',
    }
  },
  methods: {
    log() {
      window.addEventListener()
      document.querySelector()
    },
  },
}
</script>
