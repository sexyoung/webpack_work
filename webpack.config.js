var path = require('path');

module.exports = {
  entry: {
    home: "./app/home.js",
    about: "./app/about.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // Using source maps breaks urls in the CSS loader
          // https://github.com/webpack/css-loader/issues/232
          // This comment solves it, but breaks testing from a local network
          // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
          // 'css-loader?sourceMap',
          'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      }
    ]
  }
};
