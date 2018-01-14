const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),

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
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
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
        from: path.resolve(__dirname, 'public', 'index.html')
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
