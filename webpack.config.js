'use strict'

var webpack = require('webpack')
var UpdateScriptTagsPlugin = require('./_plugins/webpack.updateScriptTagsPlugin')
var Visualizer = require('webpack-visualizer-plugin')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var path = require('path')
var visualizerFile = '../..'
if (process.env.CIRCLE_ARTIFACTS) visualizerFile += '/../../../../../../../..' + process.env.CIRCLE_ARTIFACTS
visualizerFile += '/webpack_stats.html'
var noReactDOM = 'window.ReactDOM = React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'

module.exports = {
  devtool: 'source-map',
  entry: { },
  output: {
    path: path.join(__dirname, 'docs/js'),
    publicPath: '/js/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': noReactDOM
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        cacheDirectory: true
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons.chunk',
      minChunks: 3
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      extractComments: false,
      compress: {
        screw_ie8: true,
        warnings: false,
        drop_console: false
      },
      mangle: {
        except: ['$'],
        screw_ie8: true,
        keep_fnames: false
      },
      sourceMap: false,
      minimize: true
    }),
    new Visualizer({
      filename: visualizerFile
    }),
    new ProgressBarPlugin(),
    new UpdateScriptTagsPlugin({
      directory: '../docs',
      commonsChunk: 'commons.chunk',
      outputHash: true
    })
  ]
}
