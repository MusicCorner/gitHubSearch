/*
  0 - off,
  1 - warning,
  2 - error
*/

module.exports = {
  root: true,
  plugins: ["react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "airbnb-base",
    // "eslint:recommended",
    "plugin:react/recommended",
  ],
  rules: {
    indent: [2, "tab", { "SwitchCase": 1 }],
    "no-tabs": [0],
    "arrow-body-style": ["warn", "as-needed"],
    "class-methods-use-this": [0],
    "arrow-parens": [0],
    "no-confusing-arrow": [0],
    "implicit-arrow-linebreak": [0],
    "react/jsx-uses-vars": [2],
    "import/prefer-default-export": [0],
    "object-curly-newline": [2, {
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "react/prop-types": [2],
  }
};
