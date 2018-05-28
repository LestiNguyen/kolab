const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
module.exports = {
  performance: {
    hints: false
  }, 
  entry: {bundle:'./src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']}
     ]   
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        minimize:true,
      }
    }),

  ],
  mode:'production'
}
