const eslintBase = require("./eslint-base");

module.exports = {
  ...eslintBase,
  extends: ["next"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    // next
    "@next/next/no-html-link-for-pages": "off",
  },
  ignorePatterns: [".next"],
};
