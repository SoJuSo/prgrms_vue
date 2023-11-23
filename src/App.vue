<template>
  <Hello v-bind="post" />

  <!-- <Hello :id="post.id" :title="post.title" /> -->
</template>

<script>
import Hello from "~/components/Hello";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      post: {
        id: 2,
        title: "Hello Vue!",
        email: "hello@123.com",
      },
    };
  },
};
</script>
