const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {
    mode: 'development', // Set mode to development
    entry:[ './src/Scripts/index.js', './src/Styles/main.scss'], // Add the entry point for styles assuming your entry file is located at src/index.js
    output: {
        path: path.resolve(__dirname, 'dist'), // Output files in the 'dist' directory
        filename: 'bundle.js', // Bundle all JavaScript into bundle.js
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Use babel-loader for .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Transpile React code
                    }
                }
            },
            {
                test: /\.css$/, // Use MiniCssExtractPlugin loader for .css files
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
            {
                test: /\.scss$/, // Add this rule
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    'css-loader', // Translates CSS into CommonJS
                    'sass-loader' // Compiles Sass to CSS
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // Extract CSS into separate files
        }),
        new IgnoreEmitPlugin(['style.js']), // Ignore the extra JavaScript file generated for styles
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions automatically
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Serve content from 'dist' directory
        compress: true,
        port: 9000, // Serve on port 9000
    },
};