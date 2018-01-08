var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
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
      { from: './src/index.html' }
    ]),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000
  }
};
