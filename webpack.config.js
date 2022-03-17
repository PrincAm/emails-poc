const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    publicPath: "/",
  },
  target: "node",
  externals: nodeExternals(),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
