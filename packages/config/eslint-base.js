const eslintDef = require("./eslint-def");

module.exports = {
  ...eslintDef,
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
  },
};
