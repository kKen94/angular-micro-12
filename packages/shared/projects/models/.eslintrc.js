module.exports = {
  root: true,
  ignorePatterns: [
    // 'projects/**/*',
  ],
  overrides: [
    {
      files: [
        '*.ts',
      ],
      parserOptions: {
        project: [
          './tsconfig.lib.json',
        ],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      plugins: [
        'prettier',
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'prettier',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'models',
            style: 'camelCase',
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'models',
            style: 'kebab-case',
          }
        ],
        '@typescript-eslint/explicit-function-return-type': "error",
        '@typescript-eslint/explicit-module-boundary-types': "error",
        '@typescript-eslint/no-explicit-any': "error",
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: false,
          }
        ],
        'prettier/prettier': 'error',
      },
    },
    {
      files: [
        '*.html',
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended',
      ],
      rules: {},
    },
    {
      files: [
        'src/**/*.spec.ts',
        'src/**/*.d.ts',
      ],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      extends: [
        'plugin:jasmine/recommended',
      ],
      plugins: [
        'jasmine',
      ],
      env: {
        jasmine: true,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': "off",
      },
    },
  ],
}
