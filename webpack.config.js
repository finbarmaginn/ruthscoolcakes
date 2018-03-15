// TODO: html-webpack-plugin - generate dynamic html file for service worker
//       service worker currently has no index.html and just serves a template
var path = require('path'),
  DIST = path.resolve(__dirname, 'dist'),
  SRC = path.resolve(__dirname, 'src'),
  ENV = process.env.NODE_ENV,
  webpack = require('webpack'),
  LiveReloadPlugin = require('webpack-livereload-plugin'),
  // OfflinePlugin = require('offline-plugin'),
  loaderRules = [
    {
      test: /\.(ico|json|png|jpg|ttf|woff|woff2|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }
      ]
    }, {
      test: /\.(json)$/,
      use: [
        {
          loader: 'json-loader'
        }
      ]
    }, {
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: SRC,
      options: {
        babelrc: false,
        presets: [
          'env', 'react', 'stage-2'
        ],
        'plugins': ['transform-decorators-legacy']
      }
    }
  ];

var clientConfig = {
  name: 'client',
  entry: {
    main: [SRC + '/browser.js']
  },
  output: {
    path: DIST,
    filename: 'client.js'
  },
  module: {
    rules: loaderRules
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV),
        'BROWSER': JSON.stringify(true)
      }
    }),
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery"})
  ]
}

if (ENV === 'production') {
  clientConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
  // serverConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = clientConfig
// [clientConfig, serverConfig]