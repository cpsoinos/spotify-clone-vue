module.exports = {
  extends: [
    '@cpsoinos/eslint-config-vue-ts',
    '@nuxtjs/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  rules: {
    'tailwindcss/no-custom-classname': [false]
  }
}
