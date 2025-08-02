const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        app:'./src/main.js'

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'TODO LIST',
        }),
        new HtmlWebpackPlugin({
            template: './src/todolist.html',
            filename: 'todolist.html',
            title: 'app-content',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
};