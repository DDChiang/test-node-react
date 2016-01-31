var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry:{
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client', 
    // "./scripts/index"
    bundle: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client', 
      './scripts/index'
     ]
    // main: [
    //   './scripts/sass/main.scss'
    // ]
  }, 
  output: {
    path: path.join(__dirname + "dist"),
    publicPath: '/static/', // "leave as static". For some reason, "public" dn work This is used to generate URLs to e.g. images
    filename: '[name].js' // bundle.js
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin("public/[name].css", {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: path.join(__dirname, 'scripts')
      },
      {
       test: /\.scss$/, 
       loaders: ["style", "css", "sass"] 
       // loader: ExtractTextPlugin.extract('css!sass')
      }
   ]
  }
}
