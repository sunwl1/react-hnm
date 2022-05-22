const path = require('path')  
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./src/index.jsx']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
    }
 
}