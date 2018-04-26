import browsersync from 'rollup-plugin-browsersync';
import conditional from 'rollup-plugin-conditional';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import postcss from 'rollup-plugin-postcss';
import license from 'rollup-plugin-license';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import path from 'path';

const SRC_PATH = path.join(__dirname, 'src/components/index.js');
const DEV_SRC_PATH = path.join(__dirname, 'src/index.js');
const STYLE_PATH = path.join(__dirname, 'dist/style.css');
const BANNER_PATH = path.join(__dirname, 'banner.text');
const DEST_PATH = path.join(__dirname, 'dist/index.js');
const prod = process.env.build === 'production';

export default {
  input: prod ? SRC_PATH : DEV_SRC_PATH,
  output: {
    file: DEST_PATH,
    format: 'umd',
  },
  plugins: [
    postcss({
      extract: STYLE_PATH,
    }),
    babel(),
    commonjs({
      extensions: ['.js'],
    }),
    conditional(prod, [
      uglify(),
      license({
        banner: {
          file: BANNER_PATH,
          encoding: 'utf-8',
        },
      }),
    ]),
    progress(),
    filesize(),
    conditional(!prod, [browsersync()]),
  ],
};
