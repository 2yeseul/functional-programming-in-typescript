const createConfig = require('@titicaca/eslint-config-triple/create-config')

module.exports = {
  ...createConfig({
    type: 'node',
    project: './tsconfig.json',
  }),
  parserOptions: {
    requireConfigFile: false,
  },
}
