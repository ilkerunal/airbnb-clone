const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const cleanWebpack = require("clean-webpack-plugin");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "development",
  devtool: "none", //eval fonksiyonlarını kapatmak için kullanılıyor
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  }
});
