<template>
  <header>
    <h1>{{ title }}</h1>
    <button type="button" @click="toggleAddTask">
      {{ isOpenAddTask ? 'Close' : 'Add Task' }}
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
    isOpenAddTask: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggle-add-task'],
  methods: {
    toggleAddTask() {
      this.$emit('toggle-add-task');
    },
  },
};
</script>

<style></style>
