export default {
  env: {
    node: true,
    es2021: true,
  },
  extends: [],
  plugins: {},
  rules: {
    "no-console": "off",
    indent: ["error", 2],
    quotes: ["error", "single"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "no-var": "error",
    "prefer-const": "error",
  },
}
