module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/essential",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
  "vue/multi-word-component-names": [
    "error",
    {
      ignores: [],
    },
  ],
};
