import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts' ];

export default  {
  input: 'src/index.ts',
  output: [{
    file: 'lib/bundle.js',
    format: 'es'
  }],
  plugins: [
    resolve({ extensions }),
    babel({ babelHelpers: 'bundled', include: ['src/**/*.ts'], extensions, exclude: './node_modules/**'})
  ]
}