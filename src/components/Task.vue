<template>
  <div
    :class="[task.reminder ? 'reminder' : '', 'task']"
    @dblclick="toggleReminder(task.id)"
  >
    <h3>{{ task.text }}</h3>
    <p>{{ task.day }}</p>
    <button>Edit</button>
    <button @click="onDelete(task.id)">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async onDelete(id) {
      try {
        await this.$store.dispatch("task/deleteTask", id);
      } catch (error) {
        console.log(error);
      }
    },
    toggleReminder(id) {},
  },
};
</script>

<style scoped>
.reminder {
  border-left: 2px solid green;
}

.task {
  padding: 10px;
  margin: 10px;
}
</style>
