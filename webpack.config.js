const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        app: [
            '@babel/polyfill',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: 'autopilot-node',
        libraryExport: 'default'
        libraryTarget: 'umd',
    },
    module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }
        ]
    }
};
