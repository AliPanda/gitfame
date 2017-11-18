const webpack = require('webpack');
const path = require('path');


const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: BUILD_DIR,
    watchContentBase: true,
    port: 5000,
    hot: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel-loader?presets[]=react,presets[]=react'],
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['eslint-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;