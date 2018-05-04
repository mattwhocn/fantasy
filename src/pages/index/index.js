require('./index.scss')
var $ = require('jquery')
var catalogList = require('utils/data/index.js')

var homePage = {
  init(){
    this.onLoad()
  },
  onLoad() {
    this._initCatalogList()
  },
  bindEvent() {

  },

  _initCatalogList() {
    console.log(catalogList)
    let catalogItem = '<li class="catalog-item">' + 
                        '<div class="module-l"></div>' + 
                        '<div class="module-r"></div>' + 
                        '<div class="module-t"></div>' + 
                      '</li>'
    catalogList.forEach(() => {
      
    })                 
  }

}

$(function() {
  homePage.init()
})


