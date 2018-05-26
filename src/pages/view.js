var path = require('path')
var CURRENT_PATH = '../src/pages/'
var config = require('utils/data')

var htmlConfig = [], entryConfig = {}
config.forEach((item) => {
  var pageItem = {
    template: path.resolve(CURRENT_PATH + item.name + '/index.html'),
    filename: item.name + '.html',
    title: item.title,
    inject: true,
    hash: true,
    chunks: ['common', item.name]
  }
  htmlConfig.push(pageItem)
  entryConfig[item.name] = [CURRENT_PATH + item.name + '/index.js']
})

module.exports = {
  htmlConfig: htmlConfig,
  entryConfig: entryConfig
}