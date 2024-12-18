import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import prettier from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

// eslint-disable-next-line no-restricted-exports
export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      prettier,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.*"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "import-x": importX,
      "unused-imports": unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,
      "prefer-template": "error",
      "prefer-destructuring": [
        "error",
        {
          object: true,
          array: false,
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message: "Enums are not allowed.",
        },
      ],
      "no-constant-condition": ["error", { checkLoops: true }],
      "no-else-return": "error",
      "spaced-comment": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@fvs/base/*"],
        },
      ],
      "no-restricted-exports": [
        "error",
        { restrictDefaultExports: { direct: true } },
      ],
      "no-undefined": "warn",
      "import-x/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "never",
        },
      ],
      "import-x/first": "error",
      "import-x/no-duplicates": "error",
      "import-x/newline-after-import": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
    },
  },
);
