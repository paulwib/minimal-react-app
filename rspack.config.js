const path = require('path');
const { rspack } = require('@rspack/core');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
     ".js": [".js", ".ts", ".tsx"]
    }
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      title: 'Minimal React App',
      template: path.resolve(__dirname, 'src', 'templates', 'index.html'),
    }),
    new rspack.CopyRspackPlugin({
      patterns: [{
        context: path.resolve(__dirname, 'assets'),
        from: '**/*',
        to({ context, absoluteFilename }) {
          const relativePath = path.relative(context, absoluteFilename);
          return relativePath.replace(/^assets\//, '');
        },
      }]
    }),
  ]
};
