const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Minimal React App',
      template: path.resolve(__dirname, 'src', 'templates', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'assets', '**', '*'),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath) {
          return targetPath.replace(/^assets\//, '');
        }
      }]
    }),
  ]
};
