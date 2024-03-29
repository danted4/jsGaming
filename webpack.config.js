const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            hash: true,
        }),
        new CopyWebpackPlugin({
            patterns : [
                {from:'public', to: 'public'}
            ]
        })
    ],
    output: {
        path: path.resolve(__dirname, './static'),
        filename: '[name][chunkhash].js',
        clean: true,
    },
    optimization: {
        minimize:true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
              compress: {
                drop_console: true
              },
              output : {
                comments: false
              }
            },
          }),
        ],
    },
};