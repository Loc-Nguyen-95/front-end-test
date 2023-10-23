const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", 
  output: {
    path: path.join(__dirname, "/build"), 
    filename: "bundle.js" 
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000
  },
  
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
  ]
  
};
