<template>
  <header>
    <h1>{{ title }}</h1>
    <button type="button">
      Add Task
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
