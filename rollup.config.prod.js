import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import postcss from 'rollup-plugin-postcss';
import license from 'rollup-plugin-license';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import path from 'path';

const SRC_PATH = path.join(__dirname, 'src/components/index.js');
const STYLE_PATH = path.join(__dirname, 'dist/style.min.css');
const BANNER_PATH = path.join(__dirname, 'banner.text');
const DEST_PATH = path.join(__dirname, 'dist/index.js');

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
      plugins: [require('postcss-clean')],
    }),
    babel(),
    commonjs({
      extensions: ['.js'],
    }),
    progress(),
    // uglify(),
    license({
      banner: {
        file: BANNER_PATH,
        encoding: 'utf-8',
      },
    }),
    filesize(),
  ],
  external: ['hyperapp', '@hyperapp/transitions'],
};
