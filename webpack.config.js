var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap/dist/js/bootstrap.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,  //path to current folder
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
      //datepicker: './node_modules/react-datepicker/dist/react-datepicker.css'
    },
    extensions: ['', '.js', '.jsx']  //what possible extensions we want to find
  },
  module: {    // We're using dependency from package.json - 'babel-loader' to convert jsx into es5
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']  // We're telling babel-loader to take our files, parse them through 'react', get the o/p & then run them through es2015 as well
        },
        test: /\.jsx?$/,   // Any file which has .jsx extension will be taken by babel-loader
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!less-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  // sassLoader: {
  //   includePaths: [
  //     path.resolve(__dirname, './node_modules/bootstrap/scss')
  //   ]
  // },
  devtool: 'cheap-module-eval-source-map'
};
