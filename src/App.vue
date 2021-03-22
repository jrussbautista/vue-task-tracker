<template>
  <app-header title="Task Tracker" />
  <add-task @add-task="addTask" />
  <task
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
  />
</template>

<script>
import AppHeader from '@/components/Header.vue';
import Task from '@/components/Task.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  components: {
    AppHeader,
    Task,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },

  created() {
    this.tasks = [
      {
        id: '1',
        text: 'Doctors Appointment',
        day: 'March 5th at 2:30pm',
        reminder: true,
      },
      {
        id: '2',
        text: 'Meeting with boss',
        day: 'March 6th at 1:30pm',
        reminder: true,
      },
      {
        id: '3',
        text: 'Food shopping',
        day: 'March 7th at 2:00pm',
        reminder: false,
      },
    ];
  },
  methods: {
    addTask(task) {
      const nextId = parseInt(this.tasks[this.tasks.length - 1].id) + 1;
      const newTask = { ...task, id: nextId };
      this.tasks = [newTask, ...this.tasks];
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
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
