module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'standard'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': 'off',
    'react-native/no-inline-styles': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-indent-props': ['error', 2],
    'no-use-before-define': 'off'
  }
}
