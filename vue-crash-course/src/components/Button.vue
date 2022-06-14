<template>
  <button @click="onClick()" class="btn" :style="{ backgroundColor: color }">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: {
      type: String,
      default: "",
    },
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>
