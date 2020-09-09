import dts from 'rollup-plugin-dts';
import ts from '@rollup/plugin-typescript';

const typescript = ({ input, output, types }) => {
  return [
    {
      input,
      output,
      plugins: [ts()]
    },
    {
      input,
      output: {
        file: types
      },
      plugins: [dts()]
    }
  ]
};


const cjs_es = output => {
  return [
    { format: 'cjs', file: `${output}.js` },
    { format: 'esm', file: `${output}.esm.js` },
  ];
};

export default [].concat(
  typescript({
    input: 'src/index.ts',
    output: [
      {
        format: 'umd',
        name: 'Flyover',
        file: 'dist/flyover.js'
      },
      {
        format: 'esm',
        file: 'dist/flyover.esm.js'
      }
    ],
    types: './types/index.d.ts'
  }),
  typescript({
    input: 'src/alipay/index.ts',
    output: cjs_es('dist/alipay/index'),
    types: 'dist/alipay/index.d.ts'
  }),
  typescript({
    input: 'src/mybank/index.ts',
    output: cjs_es('dist/mybank/index'),
    types: 'dist/mybank/index.d.ts'
  }),
  typescript({
    input: 'src/koubei/index.ts',
    output: cjs_es('dist/koubei/index'),
    types: 'dist/koubei/index.d.ts'
  }),
  typescript({
    input: 'src/qianniu/index.ts',
    output: cjs_es('dist/qianniu/index'),
    types: 'dist/qianniu/index.d.ts'
  }),
  typescript({
    input: 'src/taobao/index.ts',
    output: cjs_es('dist/taobao/index'),
    types: 'dist/taobao/index.d.ts'
  }),
  typescript({
    input: 'src/tinyapp/index.ts',
    output: cjs_es('dist/tinyapp/index'),
    types: 'dist/tinyapp/index.d.ts'
  }),
);
