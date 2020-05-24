const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          outputPath: "images",
          name: "[name].[ext]",
          publicPath: "../images/",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages/index.html"),
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages/modules.html"),
      filename: "modules.html",
      minify: false,
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
