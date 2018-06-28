/**
 *  Created by daiwenjuan on 2018/6/28 21:31.
 */
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  context: __dirname,//这是entry配置项的根目录（绝对路径）
  entry: {
    main: [
      './client/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
    ]
  },
  output: {
    filename: '[name].[hash].js', //防止缓存
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname)
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|jpeg)$/,
        use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader?modules', 'less-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),//清除打包的文件
    new HtmlWebpackPlugin({  //根据打包动态生成的文件创建html文件
      title: 'manager',
      template: './views/temp.html',
      filename: '../views/index.html',
      inject: true,    //允许插件修改哪些内容，包括head与body
      hash: true,    //为静态资源生成hash值
      minify: {    //压缩HTML文件
        removeComments: true,    //移除HTML中的注释
        collapseWhitespace: false    //删除空白符与换行符
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    // 把一些公共的模块提取出来就行缓存，manifest在vendor的基础上把一些经常变动的在提取出来
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new webpack.DefinePlugin({
      // 定义全局变量
      'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv)
      }
    })
  ]
}