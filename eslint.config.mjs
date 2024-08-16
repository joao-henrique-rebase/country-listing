import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("plugin:react/recommended", "plugin:prettier/recommended"),
    {
        plugins: {
            react,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            ecmaVersion: 12,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            "prettier/prettier": ["error", {
                trailingComma: "es5",
                tabWidth: 2,
                semi: false,
                singleQuote: true,
                useTabs: false,
                bracketSpacing: true,
                endOfLine: "lf",
            }],

            "react/jsx-filename-extension": ["warn", {
                extensions: [".jsx", ".js"],
            }],

            "import/prefer-default-export": "off",
            "react/state-in-constructor": "off",
            "react/static-property-placement": "off",
            "react/jsx-props-no-spreading": "off",
            "react/prop-types": "off",
            "no-param-reassign": "off",
            "no-console": "warn",
            "no-debugger": "warn",
            "no-unused-vars": "warn",
            "react/react-in-jsx-scope": "off",
            "react/no-danger": "off",
            "jest/valid-expect": 0,
            "import/no-cycle": "off",

            "max-len": ["warn", {
                code: 120,
            }],

            "global-require": 0,
            "import/no-dynamic-require": 0,
        },
    },
];