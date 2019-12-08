const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map", //eval fonksiyonlarını kapatmak için kullanılıyor

  entry: {
    index: "./src/js/main.js",
    vendor: "./src/js/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: "stays.html",
      template: "./src/templates/stays.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: "details.html",
      template: "./src/templates/details.html",
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        // entry: "assets/media",
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      },
      { test: /\.(mov|mp4)$/, loader: "url-loader" },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};