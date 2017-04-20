var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: "./app/home.js",
    about: "./app/about.js",
    vendors: ['jquery']
  },
  devtool: '#source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name]---[hash].[ext]' },
      {
        test: /\.scss$/,
        use: [
          'style',
          // Using source maps breaks urls in the CSS loader
          // https://github.com/webpack/css-loader/issues/232
          // This comment solves it, but breaks testing from a local network
          // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
          // 'css-loader?sourceMap',
          'css?importLoaders=1&modules&localIdentName=[local]',
          'sass',
        ],
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: [
          'css-loader',
          'sass-loader'
        ]})
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js'}),
    new ExtractTextPlugin({ filename: '[name]---[hash].css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['home'],
      filename: './index.html',
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['about'],
      filename: './about.html',
      template: './about.html'
    })
  ]
};
