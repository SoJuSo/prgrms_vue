<template>
  <RouterLink> Home.. </RouterLink>
  <RouterView />
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
};
</script>
