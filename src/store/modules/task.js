import TaskService from "../../services/TaskService";

const task = {
  namespaced: true,
  state: () => ({
    tasks: [],
  }),
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {
    getTasks({ commit, dispatch }) {
      return TaskService.getTasks()
        .then((res) => {
          commit("SET_TASKS", res.data);
        })
        .catch(() => {
          const notification = {
            type: "error",
            message: "There was a problem getting tasks",
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
    addTask({ commit, dispatch }, task) {
      return TaskService.addTask(task)
        .then((res) => {
          commit("ADD_TASK", res.data);
          const notification = {
            type: "success",
            message: "Successfully adding task",
          };
          dispatch("notification/add", notification, { root: true });
        })
        .catch(() => {
          const notification = {
            type: "error",
            message: "There was a problem adding task",
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
    deleteTask({ commit, dispatch }, id) {
      return TaskService.deleteTask(id)
        .then(() => {
          commit("DELETE_TASK", id);
          const notification = {
            type: "success",
            message: "Successfully deleting task",
          };
          dispatch("notification/add", notification, { root: true });
        })
        .catch(() => {
          const notification = {
            type: "error",
            message: "There was a problem deleting task",
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
  },
};

export default task;
