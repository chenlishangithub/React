const webpack = require('webpack');
const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = true
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/styles/ant-theme-vars.less'), 'utf8'));

module.exports = {
  entry: {
    index: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js'
    ],
    vendor:['react', 'react-dom', 'mobx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.lazy.jsx', '.lazy.js', '.css'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
    }
  },
  devServer: {
    inline:true,
    port:8000,
    hot: true,
  },
  module: {
    rules: [
      {
          test: /\.js[x]?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          devMode ? ' style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        exclude:/node_modules/
      },
      {
        test: /\.less$/,
        exclude:/node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.less$/,
        exclude:/src/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars:themeVariables,
            }
          }
        ]
      }

    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      title: 'creatreact',
      template:'./src/app.html',
      chunks:['manifest', 'index', 'vendor']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunksFilename: 'css/[id].css.'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default:false,
        vendor:{
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 10,
          name: 'vendor',
          reuseExistingChunk: true,
          filename: 'js/[name].[chunkhash].js'
        },
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
}