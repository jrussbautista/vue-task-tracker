let nextId = 1;

const notification = {
  namespaced: true,
  state: () => ({ notifications: [] }),
  mutations: {
    ADD(state, notification) {
      state.notifications.push({ ...notification, id: nextId++ });
    },
    REMOVE(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationToRemove.id
      );
    },
  },
  actions: {
    add({ commit }, notification) {
      commit("ADD", notification);
    },
    remove({ commit }, notificationToRemove) {
      commit("REMOVE", notificationToRemove);
    },
  },
};

export default notification;
