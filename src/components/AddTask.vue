<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input
        type="text"
        name="text"
        v-model="task.text"
        placeholder="Add Task"
      />
    </div>
    <div>
      <input type="text" name="day" v-model="task.day" placeholder="Day" />
    </div>
    <div>
      <input v-model="task.reminder" type="checkbox" name="reminder" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      task: {
        text: "",
        day: "",
        reminder: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("task/addTask", this.task).then((res) => {
        this.task = { text: "", day: "", reminder: false };
      });
    },
  },
};
</script>

<style scoped></style>
