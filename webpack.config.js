const webpack = require('webpack');

module.exports = {
    // arquivo de entrada
    entry: {
        filename: './app.js'
    },

    // arquivo de saída
    output: {
        filename: './build.js'
    },
    
    // config os loaders, compilacao do js
    module: {
        loaders: [
            {
                test: /\.js$/, //onde vai rodar o código, serao todos os arq js
                exclude: /node_modules/, // não olhar os arquivos dessa pasta
                loader: 'babel-loader', //  qual o loader
                query: {
                    presets: [
                        ['es2015', { modules: false }] // define o que queremos que rode. Se fosse react no lugar de es2015 ficaria react
                    ]
                }
            }

        ]
    }

}