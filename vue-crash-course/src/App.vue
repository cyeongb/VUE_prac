<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="TASK TRACKER"
      :showAddTask="showAddTask"
    />
  
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Tasks, AddTask, Footer },
  data() {
    return {
      //일정추가 버튼 토글
      showAddTask: false,
    };
  },
 methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
 }
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
