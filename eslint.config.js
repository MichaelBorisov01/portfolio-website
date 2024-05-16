import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-strongly-recommended',
      'plugin:vue/base',
      'plugin:vuetify/base'
    ],
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential']
]
