'use strict';

module.exports = {
  globals: {
    angular: false,
    jQuery: false,
    $: false,
    $q: false,
    after: false,
    afterEach: false,
    before: false,
    beforeEach: false,
    browser: false,
    describe: false,
    inject: false,
    it: false
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'no-only-tests'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/newline-after-import': 'off',
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'no-else-return': 'warn',
    'wrap-iife': ['error', 'inside'],
    'no-use-before-define': ['error', { functions: false }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'max-nested-callbacks': 'warn',
    'newline-after-var': 'warn',
    'newline-before-return': 'warn',
    'no-mixed-requires': 'warn',
    'no-process-exit': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-warning-comments': 'warn',
    'no-alert': 'error',
    'no-div-regex': 'error',
    'no-eq-null': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: false,
        string: false
      }
    ],
    'no-implicit-globals': 'error',
    'no-native-reassign': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': 'error',
    'no-useless-call': 'error',
    'operator-linebreak': [
      'error',
      'after'
    ],
    quotes: [
      'error',
      'single'
    ],
    'sort-imports': 'error',
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off',
    strict: 'off',
    'new-cap': 'off', // off because we didn't decided convention on this
    'func-names': 'off', // off because we didn't decided convention on this
    'no-var': 'off', // off because let & const are not available on browser
    'prefer-arrow-callback': 'off', // off because it's not available on browser
    'one-var': 'off', // off because it's a matter of taste
    'one-var-declaration-per-line': 'off', // off because it's a matter of taste
    'max-len': 'off', // off because we didn't decided convention on this
    'object-curly-spacing': 'off', // off because it's a matter of taste
    'object-shorthand': 'off', // off because it's not available on browser
    'vars-on-top': 'off', // off because it's not needed
    camelcase: 'off', // off because we didn't decided convention on this
    'no-unused-expressions': 'off', // off because we use it in test
    'no-plusplus': 'off', // off because it's a matter of taste
    'spaced-comment': 'off', // off because it's a matter of taste
    'no-param-reassign': 'off', // off because we want to use this feature
    'padded-blocks': 'off', // off because it's a matter of taste
    'prefer-template': 'off', // off because it's not available on browser
    'no-underscore-dangle': 'off', // off because we want to use dangling underscores
    indent: ['off', 2], // off because it does not always right
    'array-callback-return': 'off', // off because it's not mandatory
    'global-require': 'off', // of because we use require everywhere
    'no-shadow': 'off', // off because it's safe even it would make confusion
    'no-path-concat': 'off', // off because we do not run ESN on Windows
    'prefer-rest-params': 'off', // of because it's not available on browser
    'block-spacing': 'off', // off because it's a matter of taste
    'no-new': 'off', // off because this rule should not be used in browser
    'object-property-newline': 'off', // off because of newliner
    'no-mixed-operators': 'off', // off because we want to mix operators
    'operator-assignment': 'off', // off because we do not always use +=
    'newline-per-chained-call': 'off', // off because of newliner
    'no-prototype-builtins': 'off', // off because we might never overrite 'hasOwnProperty'
    'default-case': 'off', // off because sometimes default case can be skipped
    'arrow-parens': ['error', 'as-needed'], // no braces when there is only one argument in an arrow function
    'consistent-this': ['warn', 'self'], // warns if 'this' is assigned to anything other than 'self'
    'no-process-env': 'off', // off because we need to use process.env inside webpack configs
    'object-curly-spacing': ['error', 'always'], // spaces around object curly brackets
    'import/no-webpack-loader-syntax': 'off', // allows the usage of the Webpack syntax to enforce a loader
    'prefer-destructuring': 'off', // off because sometimes we can opt out of using array/object destructuring
    'no-restricted-properties': [0, {
      'object': 'Math',
      'property': 'pow'
    }], // allows the usage of Math.pow
    'eol-last': ['error', 'always'], // enforces a line before the end of file
    "indent": ["error", 2],
    'no-only-tests/no-only-tests': 'error' // forbid focused tests
  },
  extends: 'eslint-config-airbnb-base'
};
