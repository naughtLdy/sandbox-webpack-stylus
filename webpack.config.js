"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    bundle: path.join(__dirname, "src", "index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "static/js/[name].[hash].chunk.js"
  },
  resolve: {
    extensions: [".js", ".html", ".styl"]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "source-map-loader"
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: {
                  path: path.join(__dirname, "postcss.config.js")
                }
              }
            },
            {
              loader: "stylus-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html")
    }),
    new ExtractTextPlugin({
      filename: "css/[name].[chunkhash:8].css"
    })
  ]
};
