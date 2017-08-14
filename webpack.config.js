var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var inProduction = (process.env.NODE_ENV === 'production');


module.exports = {
  entry: {
    main: [
      './src/scripts/main.js',
    ],
    brown: './src/styles/colors/brown.sass',
    cream: './src/styles/colors/cream.sass',
    grey: './src/styles/colors/grey.sass',
    navy: './src/styles/colors/navy.sass',
    orange: './src/styles/colors/orange.sass',
    pink: './src/styles/colors/pink.sass',
    purple: './src/styles/colors/purple.sass',
    teal: './src/styles/colors/teal.sass',
    wine: './src/styles/colors/wine.sass',
    yellow: './src/styles/colors/yellow.sass',
  },
  output: {
    path: path.resolve(__dirname, './theme/assets/scripts'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
				test: /\.js$/, // include .js files
				enforce: 'pre', // preload the jshint loader
				exclude: /node_modules/, // exclude any and all files in the node_modules folder
				use: [
					{
						loader: 'jshint-loader'
					}
				]
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(jpeg|jpg|gif|png)(\?.*$|$)/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: './../images/[name].[ext]'
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
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //vue.esm.js 'vue/dist/vue.common.js' for webpack 1
      //clipboard: '/node_modules/clipboard/dist/clipboard',
    }
  },
  plugins: [
    // new CleanWebpackPlugin(['assets/fonts','assets/images', 'assets/scripts'],{
    //   root: __dirname + '/theme',
    //   verbose: true,
    //   dry: false,
    //   exclude: ['js.js']
    // }),
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
    new ExtractTextPlugin('./../css/colors/[name].min.css'),
    new webpack.optimize.UglifyJsPlugin()
  );
} else {
  module.exports.plugins.push(
    new ExtractTextPlugin('./../css/colors/[name].css')
  );
}
