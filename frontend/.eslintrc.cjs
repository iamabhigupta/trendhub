module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-console': 'warn', // Prevent the use of console.log, console.error, etc.
    'no-unused-vars': 'warn', // Warn on unused variables
    'no-empty': 'error', // Disallow empty blocks
    'no-eval': 'error', // Disallow the use of eval()
    'no-alert': 'error', // Disallow the use of alert(), confirm(), and prompt()
    'no-implicit-globals': 'error', // Disallow implicit global variables
    'no-param-reassign': 'warn', // Warn when reassigning function parameters
    'no-shadow': 'warn', // Warn when a variable declaration shadows another variable
    'no-use-before-define': ['error', 'nofunc'], // Disallow using a variable before it is defined
    'react/prop-types': 'off', // Disable prop-types validation for React components when using TypeScript
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of Hooks in React
    'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in useEffect and useCallback
    '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused TypeScript variables
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow omitting return types on functions in TypeScript
  },
};
