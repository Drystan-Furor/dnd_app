// webpack.config.js
const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development', // Set to 'production' or 'none' as needed
  entry: {
    main: './build/js/main.js',
    dndnpcrng: './build/js/dndnpcrng.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
