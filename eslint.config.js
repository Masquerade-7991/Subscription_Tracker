import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      js,
      import: eslintPluginImport,
    },
    extends: ["eslint:recommended", "plugin:import/recommended"],
    rules: {
      // ✅ Best practices
      "no-console": "warn",
      "no-debugger": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      curly: ["error", "all"],

      // 💅 Style improvements
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],

      // 🔃 Import sorting & management
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
    },
  },
]);
