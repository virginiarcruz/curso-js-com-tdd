# Aula 104 - Criando um player do spotify - Apresentando o Player Final

- [Url do repositório](https://github.com/willianjusten/spotify-wrapper-player)
- Vamos utilizar vários componentes usando apenas o ES6



# Aula 105 - Mostrando o Markup Final da Aplicação

- Exibição do código do player.



# Aula 106 - Configurando o Webpack-dev-server


- Fazer o clone do [repositório com a estrutura padrão][https://github.com/willianjusten/js-tdd-course]
- A aplicação vai rodar com o webpack server, um servidor que vai permitir fazer as requisições da api. E o webpack também vai ser pra criar o bundle da aplicação que vai ser transpilado pelo babel.cd ..

## Começando a estrutura do webpack

- Instalar o babel para a transpilação e o webpack com o webpackserve para rodar o servidor que iremos utilizar.

        npm install --save-dev babel-loader webpack webpack-dev-server

- Após intalar iremos criar o arquivo `webpack.config.js` na raiz do projeto que vai ser responsável pela configuração para a compilação.
    - configurar o path - vai servir para resolver os caminhos certos da pasta.

    ```js
        // para resolvermos os caminhos corretos da pasta correta
        const path = require('path');
        const webpack = require('webpack');

        // iniciar a configuração
        module.exports = { 
        context: path.resolve(__dirname, './src'), // dirname - qual a pasta origem de todos os arquivos
        entry: {
            app: './main.js', // o arquivo principal que faz a chamada de todos os outros arquivos
        },
        output: { //onde vou jogar o arquivo
            filename: 'bundle.js', //nome do arquivo que quero gerar
            path: path.resolve(__dirname, './example'), // lugar onde eu quero jogar, a pasta onde vamos ter os arquivos de index.html etc
        },

        // responsável por levantar o servidor
        devServer: { 
            contentBase: path.resolve(__dirname, './example'),
        },

        // regras que eu quiser fazer no webpack, loading, uglify etc
        module: { 
            rules: [
            {
                test: /\.js$/, //quero que trabalhe em cima dos arquivos js
                exclude: [/node_modules/], //não quero que pegue nada do node_modules
                use: [{
                loader: 'babel-loader',//quero que ele use o babel-loader
                }]
            }
            ]
        }
        };
    ```

- Criar a pasta example com a `ìndex.html``
    - adicionar o script com o bundle.js

- No package.json, criar a task que vai ser responsável por levantar o servidor
        
        "start": "./node_modules/.bin/webpack-dev-server"
    
    - Para levantar o servidor: `npm start` e ele vai já abrir


### Observação

- Tive alguns probleminhas para subir o servidor, dava um erro ao executar o `npm start`, especificamente o erro abaixo:

      npm WARN babel-loader@7.1.3 requires a peer of babel-core@6 but none is installed.

- Tentei instalar o babel-core mas o erro persistia.
- Porém estava utilizando o terminal do VSCode. Após várias tentativas, e pesquisa na internet, cheguei a [este post](https://github.com/Microsoft/vscode/issues/28593), falando sobre um possível problema com o VSCode.
- O procedimento que fiz foi:
    1. Fechar o VSCode
    2. Apagar a pasta node_modules
    3. Adicionar esta linha no `package.json`: 
            
            { "dependencies": {"npm": "^4.6.1" } }

        - Caso o erro persista, colocar uma versão superior do npm, você terá que excluir novamente a node_modules.
            
              { "dependencies": {"npm": "^5.0.0" } }

    4. Abrir o terminal, ainda com o VSCode fechado
    5. `npm install``
    6. Se rodar tudo corretamente sucesso! Senão, repetir os passos de 2 a 4

