<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add" color="rgb(95, 38, 140)" />
    <Button text="Edit" color="rgb(54, 32, 176)" />
    <Button text="Delete" color="rgb(163, 17, 17)" />
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
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
