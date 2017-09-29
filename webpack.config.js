const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            }
          ]
    },
    devServer: {
        compress: true,
        host: 'localhost',
        port: 5000,
        historyApiFallback: true,
    }

};


