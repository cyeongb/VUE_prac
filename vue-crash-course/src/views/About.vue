<template>
  <div>
    <h1>About</h1>
    <router-link to="/">메인으로 가기</router-link>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
}

a {
  text-decoration: none;
}

h1 {
  /* text-align: center; */
  /* margin: 20px;
  padding: 20px; */
}
</style>
