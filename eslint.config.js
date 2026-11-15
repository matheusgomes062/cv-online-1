import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'dist',
      'public',
      '.vscode',
      'netlify.toml',
      'src/helpers/cssUsed.js',
      'src/auto-imports.d.ts',
      'src/components.d.ts',
    ],
  },
  {
    // templates are written in Pug, which ESLint cannot read, so variables
    // used only in the template would be reported as unused
    files: ['**/*.vue'],
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off',
      'ts/no-unused-vars': 'off',
    },
  },
)
