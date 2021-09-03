module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jsx-a11y', 'sort-imports-es6-autofix'],
  rules: {
    'no-nested-ternary': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'consistent-return': 0,
    'object-curly-newline': 0,
    'no-alert': 1,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'no-console': [1, { allow: ['warn', 'error', 'info'] }],
    'no-param-reassign': [2, { props: false }],
    'no-shadow': [2, { allow: ['res', 'err'] }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'react/no-array-index-key': 1,
    'react/no-danger': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/no-did-update-set-state': 0,
    'react/state-in-constructor': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': 0,
    'prettier/prettier': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
      },
    ],
  },
};