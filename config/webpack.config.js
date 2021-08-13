"use strict";
/**
 * Version of the Webpack Config used for Development.
 * 
 * This version will include SourceMaps, Uncompressed JS and HMR.
 */
const path = require('path');

module.exports = {
    
    output: {
        filename: "[name].min.js"
    },    

    devtool: 'source-map',
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
			plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
                        
                    }
                }
            },
            {
                test : /\.scss$/,
                use: {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [path.resolve('../node_modules')]
                    }
                }
            }
        ]
    }
};
