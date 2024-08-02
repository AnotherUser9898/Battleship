import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    ignores: ["**/ .tests/"],
    languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
