/*
 * @Date: 2020-07-19 02:05:43
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-19 02:07:23
 */ 
module.exports = [
  {
    test:/\.vue$/,
    use: [
      'vue-loader'
    ]
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader'
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      'file-loader'
    ]
  }
]