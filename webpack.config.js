var webpack = require('webpack');
var CopyWebpackPlugin = require('Copy-Webpack-Plugin');
// var htmlwebpackplugin = require('html-webpack-plugin')
module.exports = {
   entry: './src/index.js',
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: ['babel-loader']
         },
          {
            test: /\.(css|less|style)$/,
            use:[
               {
                  loader:"style-loader"
               },
               {
                  loader:"css-loader",
               },
               {
                  loader:"less-loader",
                  options:{
                     lessOptions:{
                        strictMath:true
                     }
                  }
               }
            ]
         },
         {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use:[
               {
                  loader: "file-loader",
                  options: {
                     name: '[path][name]-[hash:8]-[ext]'
                  },
               },
            ]
         },
      ]
   },
   plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets' , to: 'assets'
          },
        ],
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
   resolve: {
      extensions: ['*', '.js', '.jsx']
   },
   output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
   },
   devServer: {
      contentBase: './dist',
      historyApiFallback: true
   }
};
