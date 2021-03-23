import apiClient from "../lib/apiClient";

const addTask = (task) => {
  return apiClient.post("/tasks", task);
};

const getTasks = () => {
  return apiClient.get("/tasks");
};

const deleteTask = (id) => {
  return apiClient.delete(`/tasks/${id}`);
};

export default {
  addTask,
  getTasks,
  deleteTask,
};
