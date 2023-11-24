<template>
  <div style="transform: scale(1)">
    <Modal v-model="isShow" width="300px">
      <template #activator>
        <button>On Modal!</button>
      </template>
      <h3>App.vue</h3>
    </Modal>
    <Hello />
  </div>
</template>

<script>
import Hello from "~/components/Hello";
// import Modal from "~/components/Modal";
export default {
  components: {
    Hello,
    // Modal,
  },
  data() {
    return {
      isShow: false,
      msg: "Hello Vue!",
    };
  },
};
</script>
