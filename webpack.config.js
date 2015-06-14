module.exports = {
  entry: {
    example: './example/example.jsx',
  },
  output: {
    path: './example',
    filename: 'all.js',
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /build|node_modules/, loader: 'babel-loader?stage=0'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
