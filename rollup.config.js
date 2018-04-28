import browsersync from 'rollup-plugin-browsersync';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import path from 'path';

const SRC_PATH = path.join(__dirname, 'src/index.js');
const STYLE_PATH = path.join(__dirname, 'dist/style.css');
const DEST_PATH = path.join(__dirname, 'example/index.js');

export default {
  input: SRC_PATH,
  output: {
    name: 'HCTips',
    file: DEST_PATH,
    format: 'umd',
    globals: {
      hyperapp: 'hyperapp',
      '@hyperapp/transitions': 'transitions',
    },
  },
  plugins: [
    postcss({
      extract: STYLE_PATH,
    }),
    babel(),
    commonjs({
      extensions: ['.js'],
    }),
    progress(),
    browsersync(),
  ],
  external: ['hyperapp', '@hyperapp/transitions'],
};
