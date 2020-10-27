module.exports = {
  ignorePatterns: ['dist'],
  plugins: ['prettier'],

  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, trailingComma: 'none' }
    ],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 1
  }
}
