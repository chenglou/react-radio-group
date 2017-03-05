var mainConfig = require('../webpack.config');
var path = require('path');

module.exports = {
    entry: path.resolve('./example/example.jsx'),
    output: {
        filename: path.resolve('./example/build/all.js'),
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /build|node_modules/, loader: 'babel-loader?stage=0'},
            {
                test: /\.css$/,
                loader: 'style!css'
            },
        ]
    },
    resolve: {
        root: [
            path.resolve('./example'),
            path.resolve('./src'),
        ],
        extensions: ['', '.js', '.jsx']
    }
};
