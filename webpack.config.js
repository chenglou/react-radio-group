var path = require('path');

module.exports = {
    entry: path.resolve('./src/index.jsx'),
    output: {
        library: 'RadioGroup',
        libraryTarget: 'umd'
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /build|node_modules/, loader: 'babel-loader?stage=0'},
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx']
    }
};
