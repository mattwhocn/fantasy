var path = require('path')
var alias = require('./alias')
var view = require('../src/pages/view')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var htmlWebpackPlugin = require("html-webpack-plugin")

var extractCSS = new ExtractTextPlugin('css/[name].css');
var extractSCSS = new ExtractTextPlugin('css/[name].css');

// 环境变量的配置   online / dev
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

//开发和打包时候不同的根目录
var _publicPath = WEBPACK_ENV == 'dev' ? '/':'../';

var getHtmlConfig = function (name, title) {
  return {
    template: path.resolve(__dirname,'../src/pages/' + name + '/index.html'),
    filename: name + '.html',
    title: title,
    inject: true,
    hash: true,
    chunks: ['common', name]
  }
}

var config = {
  entry: {
    'common': ['../src/pages/common/index.js'],
    'index': ['../src/pages/index/index.js'],
  },
  output: {
    path: path.resolve('../dist'),
    publicPath: _publicPath,
    filename: 'js/[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.json'],
    alias: {
      node_modules: path.resolve(__dirname + '../node_modules'),
      utils: path.resolve('../src/utils'),
      pages: path.resolve(__dirname + '../src/pages'),
      image: path.resolve(__dirname + '../src/image'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader'])
      },
      {
        test: /\.scss$/i,
        use: extractSCSS.extract([ 'css-loader', 'sass-loader' ])
      },
      {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)\??.*$/,
        loader: 'url-loader?limit=1000&name=resource/[name].[ext]'
      },
      {
        test: /\.(md|string)$/i,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    extractCSS,
    extractSCSS,
    new htmlWebpackPlugin(getHtmlConfig('index', '目录')),
  ],
}

Object.assign(config.entry, view.entryConfig)
view.htmlConfig.forEach(item => {config.plugins.push(new htmlWebpackPlugin(item))})

if ('dev' === WEBPACK_ENV) {
  config.entry.common.push('webpack-dev-server/client?http://localhost:8082/')
}

module.exports = config;