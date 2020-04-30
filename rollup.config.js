import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    name: 'Flyover',
    format: 'umd',
    file: './dist/flyover.js',
  },
  plugins: [
    typescript()
  ]
}
