var webpack = require('webpack'),
    BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './App/app.jsx'
    ],
    output: {
        path: './wwwroot/app',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /node_modules/,
                query:
                {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};