const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./build/utils')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

let baseUrl = '/vue/'

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
  pages: utils.setPages(),
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: new RegExp(baseUrl + 'page1'), to: baseUrl + 'page1.html' },
        { from: new RegExp(baseUrl + 'page2'), to: baseUrl + 'page.html' }
      ]
    }
  }
}
