const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const HtmlWebpackRenderPlugin = require('html-webpack-render-plugin');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      roots: [path.resolve(__dirname, './src')],
      extensions: ['', '.js', '.json'],
    },
    //plugins: [
      //new HtmlWebpackPlugin({
        //template: path.resolve(__dirname, 'src', 'index.html'),
        //filename: 'index.html',
        //inject: 'body',
      //}),
      //new HtmlWebpackRenderPlugin(),
    //],
  })
  return actions
}
