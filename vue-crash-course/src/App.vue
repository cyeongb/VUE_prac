<template>
  <div class="container">
    <Header title="TASK TRACKER" />
    <AddTask @add-task="addTask" />
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: { Header, Tasks, AddTask },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
  },

  created() {
    this.tasks = [
      {
        id: 1,
        title: "목 병원가보기",
        day: "2022년 6월 14일 14:00",
        reminder: true,
      },
      {
        id: 2,
        title: "점심먹을 식재료 사러가기",
        day: "2022년 6월 13일 18:00",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
.btn {
  border: none;
  /* background-color: rgb(163, 17, 17); */
  padding: 0.75rem;
  color: #fff;
  font-weight: bold;
  border-radius: 0.6rem;
  font-size: 15px;
  cursor: pointer;
}
</style>
