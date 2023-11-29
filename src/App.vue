<template>
  <h1>
    {{ msg }}
  </h1>
  <h1>
    {{ count }}
  </h1>
  <Hello />
</template>

<script>
import Hello from "~/components/Hello";
import sampleMixin from "~/mixins/sample";
export default {
  // mixins: [sampleMixin], // 컴포넌트보다 아래 작성해야 함
  components: {
    Hello,
  },
  mixins: [sampleMixin],
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
};
</script>
