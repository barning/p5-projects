const path = require('path');
const babelConfig = require('./babel.config.json');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: [
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,

        // See https://stackoverflow.com/questions/57361439/how-to-exclude-core-js-using-usebuiltins-usage/59647913#59647913
        // and https://github.com/babel/babel-loader#exclude-libraries-that-should-not-be-transpiled
        exclude: [
          /\bcore-js\b/,
          /\bwebpack\/buildin\b/
        ],

        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            ...babelConfig
          }
        }
      },      
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/g,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'assets'),
            to: path.resolve(__dirname, 'dist', 'assets')
          }
        ]
      }
    ),
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  devtool: 'source-map'
};
