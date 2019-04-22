const path = require('path');

module.exports = {
  entry: './packages/index.ts',
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', 'tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'distribution')
  }
};