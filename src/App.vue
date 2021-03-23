<template>
  <app-header
    title="Task Tracker"
    :is-open-add-task="isOpenAddTask"
    @toggle-add-task="toggleAddTask"
  />
  <add-task v-if="isOpenAddTask" @add-task="addTask" />
  <task
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
  />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Task from "@/components/Task.vue";
import AddTask from "@/components/AddTask.vue";
import TaskService from "@/services/TaskService";

export default {
  components: {
    AppHeader,
    Task,
    AddTask,
  },
  data() {
    return {
      isOpenAddTask: false,
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        const { data } = await TaskService.getTasks();
        this.tasks = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addTask(task) {
      try {
        const { data } = await TaskService.addTask(task);
        this.tasks = [...this.tasks, data];
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id) {
      try {
        await TaskService.deleteTask(id);
        this.tasks = this.tasks.filter((task) => task.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    toggleAddTask() {
      this.isOpenAddTask = !this.isOpenAddTask;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
