module.exports = {
  // parser: '@typescript-eslint/parser',
  env: {
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "plugin:@typescript-eslint/recommended",

    "plugin:prettier/recommended",
    "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    "project": ".",
    // "project": "./src",
    "sourceType": "module"
  },
  plugins: [
    'react',
    "@typescript-eslint",
    "prettier",
    
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/dot-notation": ["error"]
  },
}
