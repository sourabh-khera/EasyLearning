const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
          ]
    },
    devServer: {
        contentBase: './src/client',
        compress: true,
        host: 'localhost',
        port: 5000,
        historyApiFallback: true,
    }

};


