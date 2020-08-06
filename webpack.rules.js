/*
 * @Date: 2020-07-19 02:05:43
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-06 15:11:07
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
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
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