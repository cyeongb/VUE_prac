<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :btnText="showAddTask ? '닫기' : '일정추가'"
      :color="showAddTask ? 'gray' : 'rgb(95, 38, 140)'"
    />
    <Button btnText="수정" color="rgb(54, 32, 176)" />
    <Button btnText="삭제" color="rgb(163, 17, 17)" />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "header",
    },
    showAddTask: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  gap: 2rem;
}
</style>
