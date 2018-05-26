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
    catalogList.forEach((item, index) => {
      let catalogItem = $('<a href="/'+item.href+'.html">'
                        +   '<li class="catalog-item">'
                        +     '<div class="module-l"></div>'
                        +     '<div class="module-r">'+ item.name +'</div>'
                        +     '<div class="module-t">'+ index +'</div>'
                        +   '</li>'
                        + '</a>')
      $('.catalog').append(catalogItem)
    })         
  }

}

$(function() {
  homePage.init()
})


