<template>
  <div style="transform: scale(1)">
    <Modal width="300px">
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
      msg: "Hello Vue!",
    };
  },
};
</script>
