const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCSSExtractPlugin.loader,
            'css-loader', 
            'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          outputPath: 'images',
          name: '[name].[ext]',
          publicPath: '../images/'
        }
      }
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      minify: false
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })   
  ]
};