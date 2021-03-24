<template>
  <notification-container />
  <app-header title="Task Tracker" />
  <router-view />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  components: {
    AppHeader,
    NotificationContainer,
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
