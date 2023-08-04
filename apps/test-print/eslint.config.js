const baseConfig = require('../../eslint.config.js');
const { FlatCompat } = require('@eslint/eslintrc');
const eslintrc = new FlatCompat({
  baseDirectory: __dirname
});

module.exports = [
  ...eslintrc.extends("plugin:@nx/react"),
  baseConfig,
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {},
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {},
  },
  {
    files: ['*.js', '*.jsx'],
    rules: {},
  },
];
