const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { webpack } = require('webpack');
const buildPath = path.join(__dirname, '../build');

const isDev = process.env.NODE_ENV == "development"
const assetsPath = 'assets/__nubdev__'

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: isDev ? assetsPath+'/js/bundle.js' : assetsPath+'/js/[name].[hash].js',
    path: buildPath,
    publicPath: "/",
    chunkFilename: '[name].chunk.[chunkhash].js'
  },
  optimization: {
    minimize: !isDev,
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,

          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: assetsPath+'/images/[name].[hash].[ext]',
              publicPath: './'
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
              name: assetsPath+'/images/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: './index.html',
      inject: false,
      publicPath: "./",
      favicon: "./static/favicon.ico"
    }),
    new MiniCssExtractPlugin({
        filename: assetsPath+'/css/[name].[hash].css',

    }),
  ],
  devServer: {
    historyApiFallback: { index: "/", disableDotRule: true },
    open: true
  }
};
