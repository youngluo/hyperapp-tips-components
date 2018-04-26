module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-image-inliner')({
      assetPaths: ['dist/assets'],
      maxFileSize: 8 * 1024,
    }),
  ],
};
