module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
      es6: true,
      browser: true,
      node: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'arrow-body-style': 'warn',
      'linebreak-style': 'off',
      'no-param-reassign': 'off',
      'no-nested-ternary': 'warn',
      'global-require': 'off',
      'no-async-promise-executor': 'off',
      'max-classes-per-file': ['error', 2],
      'class-methods-use-this': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
      'react/prop-types': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      semi: 'error',
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'warn',
      'comma-dangle': ['error', 'always-multiline'],
      'import/extensions': 'off',
      'max-len': [
        'error',
        {
          code: 120,
          comments: 80,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'jsx-a11y/alt-text': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.tsx', '.ts'],
          moduleDirectory: ['node_modules', 'src/'],
        },
      },
    },
    overrides: [
      {
        files: ['webpack.*.js'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],
    extends: [
      'airbnb',
      'prettier',
      'prettier/react',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
      'react',
      'react-hooks',
      'jsx-a11y',
      'import',
      'prettier',
      'you-dont-need-momentjs',
    ],
  };
  