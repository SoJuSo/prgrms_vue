<template>
  <h1>Hello.vue</h1>
  <!-- <div>{{ $store.state.count.count }}</div>
  <button @click="$store.commit('count/increaseCount')">+</button>
  <button @click="$store.commit('count/decreaseCount')">-</button> -->
  <div>{{ count }}</div>
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">Fetch Todo</button>
  <div>{{ msg }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["msg"]), //<< 전역은 다음과 같이 첫번째 인수를 생략한다.
    ...mapState("count", ["count"]), //전개하겠다.
    // count() {
    //   return this.$store.state.count.count;
    // },
    ...mapState("message", ["message"]),
    // message() {
    //   return this.$store.state.message.message;
    // },
    ...mapGetters("message", ["reversedMessage"]),
    // reversedMessage() {
    //   return this.$store.getters["message/reversedMessage"];
    // },
  },
  methods: {
    ...mapMutations("count", ["increaseCount", "decreaseCount"]),
    // increaseCount() {
    //   this.$store.commit("count/increaseCount");
    // },
    // decreaseCount() {
    //   this.$store.commit("count/decreaseCount");
    // },
    ...mapActions("message", ["fetchTodo"]),
    // fetchTodo() {
    //   this.$store.dispatch("message/fetchTodo");
    // },
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
