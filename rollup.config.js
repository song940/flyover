import dts from 'rollup-plugin-dts';
import ts from '@rollup/plugin-typescript';

const typescript = ({ input, output, types, ...options }) => {
  return [
    {
      input,
      output: {
        file: `${output}.js`,
        ...options,
      },
      plugins: [ts()]
    },
    {
      input,
      output: {
        file: types || `${output}.d.ts`
      },
      plugins: [dts()]
    }
  ]
};


export default [].concat(
  typescript({
    format: 'umd',
    name: 'Flyover',
    input: 'src/index.ts',
    output: 'dist/flyover',
    types: './types/index.d.ts'
  }),
  typescript({
    input: 'src/alipay/index.ts',
    output: 'lib/alipay/index',
    format: 'cjs'
  }),
  typescript({
    input: 'src/mybank/index.ts',
    output: 'lib/mybank/index',
    format: 'cjs'
  }),
  typescript({
    input: 'src/koubei/index.ts',
    output: 'lib/koubei/index',
    format: 'cjs'
  }),
  typescript({
    input: 'src/qianniu/index.ts',
    output: 'lib/qianniu/index',
    format: 'cjs'
  }),
  typescript({
    input: 'src/taobao/index.ts',
    output: 'lib/taobao/index',
    format: 'cjs'
  }),
);
