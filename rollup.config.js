import dts from 'rollup-plugin-dts';
import ts from '@rollup/plugin-typescript';

const typescript = ({ input, output, ...options }) => {
  return [
    {
      input,
      output: {
        file: `./dist/${output}.js`,
        ...options,
      },
      plugins: [ts()]
    },
    {
      input,
      output: {
        file: `./types/${output}.d.ts`
      },
      plugins: [dts()]
    }
  ]
};


export default [].concat(
  typescript({
    name: 'Flyover',
    input: 'src/index.ts',
    output: 'flyover',
    format: 'umd',
  }),
  typescript({
    input: 'src/alipay/index.ts',
    output: 'flyover-alipay',
    format: 'cjs'
  }),
  typescript({
    input: 'src/mybank/index.ts',
    output: 'flyover-mybank',
    format: 'cjs'
  }),
  typescript({
    input: 'src/koubei/index.ts',
    output: 'flyover-koubei',
    format: 'cjs'
  }),
  typescript({
    input: 'src/qianniu/index.ts',
    output: 'flyover-qianniu',
    format: 'cjs'
  }),
  typescript({
    input: 'src/taobao/index.ts',
    output: 'flyover-taobao',
    format: 'cjs'
  }),
);
