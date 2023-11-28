<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink
    :to="{
      name: 'docsId',
      params: { id: '7777' },
      query: {
        name: 'kim',
        age: 26,
        email: '123@123.com',
      },
    }"
  >
    Documents Id
  </RouterLink>
  <!-- <button @click="$router.push('/')">Home</button>
  <button @click="$router.push('/about')">About</button> -->
  <button @click="$router.push({ name: 'home' })">Home</button>
  <button @click="$router.push({ name: 'about' })">About</button>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
};
</script>
