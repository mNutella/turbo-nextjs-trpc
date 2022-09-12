const eslintBase = require("./eslint-base");

module.exports = {
  ...eslintBase,
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
};
