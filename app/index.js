'use strict'

var SSG = require('@holidayextras/static-site-generator')
var config = require('../config/')
var path = require('path')
const clean = process.argv.length > 2

SSG.default({
  src: path.join(__dirname, '..'),
  clean,
  config: config,
  dataSource: () => {},
  layoutDir: '_layouts',
  templateDir: '_layouts/_templates',
  destination: 'docs',
  assets: 'public',
  webpack: 'webpack.config.js'
})
