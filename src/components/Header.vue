<template>
  <header>
    <h1>{{ title }}</h1>
    <router-link :to="{ name: 'About' }"> About </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
