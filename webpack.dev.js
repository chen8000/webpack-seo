/*
 * @Date: 2020-07-16 18:47:40
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-06 15:09:20
 */ 
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const rules = require('./webpack.rules')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '../'
  },
  devtool: 'inline-source-map', // 方便调试，
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(), // 每次编译都清除dist目录
    new VueLoaderPlugin(), // vue-loader 依赖插件
    new webpack.NamedModulesPlugin(), // 模块热替换
    new webpack.HotModuleReplacementPlugin(), // 模块热替换
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new PrerenderSPAPlugin({
    //   staticDir: path.join(__dirname, './dist'), 
    //   routes: ['/route', '/test'],
      
    //   renderer: new Renderer({
    //     ignoreJSErrors: true,
    //     inject: {
    //       foo: 'bar'
    //     },
    //     headless: false,
    //     renderAfterTime: 5000
    //   })
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      ...rules
    ]
  }
}