
var path = require('path')

module.export = function() {
  return {
    node_modules: path.resolve(__dirname + '../node_modules'),
    utils: path.resolve('../src/utils'),
    pages: path.resolve(__dirname + '../src/pages'),
    image: path.resolve(__dirname + '../src/image'),
  }
}