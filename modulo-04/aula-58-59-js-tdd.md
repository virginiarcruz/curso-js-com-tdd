# Aula 58 - Introdução a Módulos em JS

* O que são módulos - pequenos pedaços de código, que tem uma única função.
* Uma maneira de criar é usando _Anonymous closure_ - onde você cria as variáveis ali dentro e elas só são utilizadas naquele escopo do módulo
* Global import - tem uma variável global e é possível identificar quais os métodos do móduo.

* Ver tipos de módulo

    https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc



# Aula 59 - Configurando o Webpack


* Webpack - responsável por pegar os módulos no JS e fazer com que ele rode no browser.

        npm init -y

    - inicia tudo sem perguntar nada

          npm install --save-dev webpack babel-loader babel-core babel-preset-es2015-native-modules

* Para saber os comandos

        webpack --help

    - Mostra todas as opções que podemos ter no webpack


Exemplo: Vamos utilizar a biblioteca Ramda

* Estou importando tudo como R de Ramda.
* O método union ele junta os arrays sem fazer duplicidade de itens.

        import * as R from 'ramda'app.js

        const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
        const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

        const arr3 = R.union(arr1, arr2);

        console.log(arr3);

 * Chamo este script no index.html
 * Se fizer somento isto vai dar erro no console porque ele não reconhece o import.
 * É necessário configurar o arquivo de **webpack.config.js**

        const webpack = require('webpack');

        module.exports = {
            
        }
    
    - Toda a configuração do webpack vai dentro de **module.exports**
    - Ver o arquivo webpack.config.js

 * Quando terminar a configuração pode rodar de duas formas.
    - Chamar no console
            webpack
    - Pode fazer uma build no package.json e também um watch para que ele fique assistindo as modificações e depois gerar uma build.
    - Ver arquivo package.json.

            "scripts": {
                "build": "./node_modules/.bin/webpack --colors --progress",
                "watch": "npm run build -- --watch"
            },

* Ao terminar de editar o package.json executar o codigo na linha de comando:

            npm run watch

    - Se não houver erros ele vai fazer a compilação, cria o build.js e exibe também avisos que acha pertinentes.
    - Se trocar o app.js por build.js ele já vai rodar o index.html sem erro.
    