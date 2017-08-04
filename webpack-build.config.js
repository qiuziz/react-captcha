// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
module.exports = {
  //程序入口.
  entry: {
    index: ['./src/components/captcha/index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(path.resolve(__dirname), 'dist'),
    library: ['captcha'],
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  // devtool: 'source-map',
  // webpack 的主目录.
  module: {
    rules: [
      //配置 js 后缀的文件，应该采用哪种加载器.
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              cacheDirectory: true
            }
          }
        ],
        include: [
          path.join(__dirname, 'src/components')
        ]
      }
    ]
  },
  // 其他解决方案配置
	resolve: {
        extensions: ['.js', '.jsx', '.less', '.css'] //后缀名自动补全
    },
  plugins: [
   
    new CleanPlugin(['dist']),
  
    //用来优化生成的代码 chunk,合并相同的代码
    new webpack.optimize.AggressiveMergingPlugin(),

    //用来保证编译过程不出错
    new webpack.NoEmitOnErrorsPlugin(),
    // Uglify 加密压缩源代码
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false, // 是否保留代码格式和所有注释
        },
        compress: {
            warnings: false, // 删除没有用的代码时是否发出警告
            drop_console: true, // 是否删除所有的console
        },
    }),
  ]
};