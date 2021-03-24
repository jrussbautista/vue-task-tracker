<template>
  <div class="dashboard">
    <add-task />
    <task v-for="task in task.tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import AddTask from "@/components/AddTask.vue";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Task,
    AddTask,
  },
  computed: {
    ...mapState(["task"]),
  },
  created() {
    this.$store.dispatch("task/getTasks");
  },
  methods: {
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
};
</script>
