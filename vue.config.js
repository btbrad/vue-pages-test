const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./build/utils')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  // entry: {
  //   page1: '@/pages/index/index.js'
  // },
  // chainWebpack: config => {
  //   config.resolve.alias.set('@', resolve('src'))
  //   config.entry = utils.getEntries()
  // },
  // configureWebpack: config => {
  //   console.log(utils.getEntries())
  //   config.entry = utils.getEntries()
  //   return {
  //     plugins: [...utils.htmlPlugin()]
  //   }
  // }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'My Page',
  //     filename: 'demo.html',
  //     template:
  //   })
  // ]
  pages: utils.setPages()
}
