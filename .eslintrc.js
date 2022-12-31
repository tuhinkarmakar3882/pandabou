module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "vue/script-setup-no-uses-vars": "off",
  },
};
