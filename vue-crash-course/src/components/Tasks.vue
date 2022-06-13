<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <h3>{{ task.text }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
};
</script>
