const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { watchFile } = require('graceful-fs');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles : ['./src/index.html', './src/todolist.html']
    },
});