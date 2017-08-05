var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var inProduction = (process.env.NODE_ENV === 'production');


module.exports = {
  entry: {
    main: [
      './src/scripts/main.js',
      './src/styles/theme.sass'
    ]
  },
  output: {
    path: path.resolve(__dirname, './theme/assets/scripts'),
    filename: '[name].js',
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        })
      },
      {
        test: /\.(jpeg|jpg|gif|png)(\?.*$|$)/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: './../images/[name].[hash].[ext]'
            }
          },
          'img-loader'
        ]

      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: './../fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['assets/fonts','assets/images', 'assets/scripts'],{
      root: __dirname + '/theme',
      verbose: true,
      dry: false,
      exclude: ['js.js']
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction,
    }),
    new WebpackNotifierPlugin({contentImage: path.join(__dirname, 'src/images/icon.png')}),
    new WebpackNotifierPlugin({title: 'Webpack'}),
    function () {
      this.plugin('done', stats => {
        require('fs').writeFileSync(
          path.join(__dirname, 'theme/manifest.json'),
          JSON.stringify(stats.toJson())
        );
      })
    }
  ]
};

if (inProduction) {
  module.exports.plugins.push(
    new ExtractTextPlugin("./../css/theme.min.css"),
    new webpack.optimize.UglifyJsPlugin()
  );
} else {
  module.exports.plugins.push(
    new ExtractTextPlugin("./../css/theme.css")
  );
}
