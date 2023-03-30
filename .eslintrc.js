module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len": ["error", { "code": 125 , "ignoreStrings": true , "ignoreComments": true , "ignoreTemplateLiterals": true}],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "max-lines-per-function": ["error", { "max": 100,"skipBlankLines": true,"skipComments":true }]
  }
}
