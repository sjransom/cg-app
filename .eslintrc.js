module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        semi: 0,
        'eol-last': 2,
        'no-import-assign': 1,
        'no-constant-condition': 2,
        'no-dupe-keys': 2,
        'no-empty': 2,
        'no-extra-boolean-cast': 2,
        'no-prototype-builtins': 2,
        'no-undef': 2,
        'no-underscore-dangle': 2,
        'no-unreachable': 2,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-useless-escape': 2,
        'no-var': 2,
        'object-curly-spacing': ['error', 'always'],
        strict: [2, 'global'],
        'comma-dangle': ['error', 'never'],
        'prettier/prettier': 'error'
      }
    }
  ]
}
