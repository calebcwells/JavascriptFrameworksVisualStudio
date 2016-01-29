var webpack = require('webpack');

module.exports = {
    entry: {
        boot: './App/boot.ts',
        common: './App/common.ts'
    },
    output: {
        path: './wwwroot/app',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ],
    watch: true
};