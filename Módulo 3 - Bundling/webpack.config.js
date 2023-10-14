const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
  // context: path.resolve(__dirname, "./src"),
  resolve: { extensions: [".ts", ".js"] },
  entry: { app: "./src/index.ts", appStyles: "./src/styles.scss" },
  // output: { filename: "[name].[chunkhash].js" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      scriptLoading: "blocking",
    }),
  ],
  devServer: {
    port: 8085,
  },
};
