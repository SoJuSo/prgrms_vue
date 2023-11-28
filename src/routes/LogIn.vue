<template>
  <form @submit.prevent>
    <input v-model="userId" type="text" placeholder="Your ID!" />
    <input v-model="userPW" type="password" placeholder="Your PW!" />
    <button @click="logIn">Log in!</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userPW: "",
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch("user/logIn", {
        id: this.userId,
        pw: this.userPW,
      });
    },
  },
};
</script>
