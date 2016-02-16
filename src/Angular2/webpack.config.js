var webpack = require('webpack'),
    BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        vendor: './App/vendor.ts',
        app: './App/app.ts'
    },
    output: {
        path: './wwwroot/app',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] }),
        new BrowserSync({ proxy: 'localhost:55274' })
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            }
        ]
    },
    tslint: {
        emitErrors: false,
        failOnHint: false
    }
};