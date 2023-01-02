//config specific to production environment
const webpack = require('webpack')
//const BundleAnalyzerPlugin =
//  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Build App Name'),
    }),
    //new BundleAnalyzerPlugin(),
  ],
}
