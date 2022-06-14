<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>할일 추가</label>
      <input type="text" name="title" v-model="title" placeholder="할일 추가하기" />
    </div>
    <div class="form-control">
      <label>일정</label>
      <input type="text" name="day" v-model="day" placeholder="2022년1월1일13:30" />
    </div>
    <div class="form-control form-control-check">
      <label>알림 켜기</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <input type="submit" value="저장하기" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.title) {
        alert("할일을 추가해 주세요");
        return;
      }
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        title: this.title,
        day: this.day,
        reminder: this.reminder,
      };

      //부모에 전달
      this.$emit("add-task", newTask);

      //초기화
      this.title = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}
.form-control input {
  width: 98%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: ce;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
