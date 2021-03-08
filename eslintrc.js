module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          'tsconfig.*?.json',
          'e2e/tsconfig.json',
        ],
        createDefaultProgram: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        // AirBnB Styleguide rules
        'airbnb-typescript/base',
      ],
    },
  ],
  rules: {
    // Custom rules
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
  },
};
