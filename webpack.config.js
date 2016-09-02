var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var env = process.env.NODE_ENV

var config = {
  entry: {
    index: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
       path.resolve(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].bundle.js?[hash]",
  },
  resolve: {
    extension: ['', '.js', 'jsx', '.json'],
    alias: {}
  },
  'display-error-details': true,
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        // exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=25000'
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
};

if (env === 'production') {
  config.plugins = config.plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  );
} else {
  config.devtool = 'source-map';
}

module.exports = config;
