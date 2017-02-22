
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/src/build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}