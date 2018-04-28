module.exports = {
  plugins: [
    require('postcss-merge-rules'),
    require('autoprefixer'),
    require('postcss-image-inliner')({
      assetPaths: ['dist/assets'],
      maxFileSize: 8 * 1024,
    }),
  ],
};
