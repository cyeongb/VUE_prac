<template>
  <div>
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    //일정 삭제
    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      });

      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
        : alert("삭제가 되지 않았습니다.");
    },

    //일정 알림
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);

      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },

    //일정 추가
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },

    //데이터 가져오기
    async fetchData() {
      // api proxy 사용
      const res = await fetch("api/tasks");

      const data = await res.json();
      return data;
    },

    // 한 task 가져오기
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();
      return data;
    },
  },

  async created() {
    this.tasks = await this.fetchData();
  },
};
</script>
