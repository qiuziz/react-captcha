// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
const config = {
  //程序入口.
  entry: [
    './src/components/captcha/index.js'
  ],
  output: {
    filename: 'captcha.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'source-map',
  // webpack 的主目录.
  context: __dirname,
  devServer: {
    // 静态文件位置
    contentBase: path.join(__dirname, '/'),
  },
  module: {
    rules: [
      //配置 js 后缀的文件，应该采用哪种加载器.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              // presets: ['es2015', 'react'],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CleanPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      }
    }),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
};
//模块导出
module.exports = config;