// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        // Node.js globals
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        console: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier,
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": "error",
      "prefer-const": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
    },
  },
];

 