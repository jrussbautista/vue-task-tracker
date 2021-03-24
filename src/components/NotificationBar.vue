<template>
  <div>
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NotificationBar",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification);
    }, 3000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: {
    ...mapActions("notification", ["remove"]),
  },
};
</script>

<style></style>
