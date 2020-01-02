const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const PAGE_PATH = path.resolve(__dirname, '../src/pages')

exports.getEntries = () => {
  let entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  let map = {}

  entryFiles.forEach(filePath => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))

    map[filename] = filePath
  })

  return map
}

exports.htmlPlugin = configs => {
  let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
  let arr = []

  entryHtml.forEach(filePath => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    console.log(filename)
    let conf = {
      template: filePath,
      filename: filename + '.html',
      chunks: ['manifest', 'vendor', filename],
      inject: true
    }

    if (configs) {
      conf = merge(conf, configs)
    }

    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        chunkSortMode: 'manual'
      })
    }

    arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}

exports.setPages = configs => {
  let entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  let map = {}

  entryFiles.forEach(filePath => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    let tmp = filePath.substring(0, filePath.lastIndexOf('\/'))

    let conf = {
      entry: filePath,
      template: tmp + '.html',
      filename: filename + '.html',
      chunks: ['manifest', 'vendor', filename],
      inject: true
    }

    if (configs) {
      conf = merge(conf, configs)
    }

    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        chunkSortMode: 'manual'
      })
    }

    map[filename] = conf
  })

  return map
}
