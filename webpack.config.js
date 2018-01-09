const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'env', 'react'],
            plugins: ['transform-class-properties', 'transform-runtime']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader'
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'index.html')
      },
      {
        from: path.resolve(__dirname, 'src/components/Teams/images'),
        to: path.resolve(__dirname, 'dist/images')
      },
    ]),
  ],

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  }
};
