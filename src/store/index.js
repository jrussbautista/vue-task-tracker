import { createStore } from "vuex";
import task from "./modules/task";
import notification from "./modules/notification";

// Create a new store instance.
const store = createStore({
  modules: {
    task,
    notification,
  },
});

export default store;
