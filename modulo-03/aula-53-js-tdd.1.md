# Aula 53 - UglifyJS no Webpack

* Dentro do Webpack tenho com melhorar o código para que ele fique em menor tamanho, retirando os comentário e warnings por exemplo.
* Dessa forma o build vai ficar minificado e só vai chamar o que estamos utilizando
* Melhora o Webpack para que tenhamos uma melhor entrega.

       plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false}
          })
       ]


# Aula 54 - Variáveis de Ambiente no Webpack


* Algumas bibliotecas identificam se estamos em ambiente de produção ou desenvolvimento e de acordo com o ambiente definido eu consigo comprimir mais ou menos daquela biblioteca.

* Como teste será instalado o **react** e **reactDOM**, dentro deles tem instâncias que procuram se é developer o production.
  - adiciono o plugin para definir a variável de produção
  - No webpack - essa variavel vai ser lida aqui se não estiver definida vai ser production

        const nodeENV = process.env.NODE_ENV || 'production';
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeENV)}
         })

        npm run biuld

  - o arquivo vai ser comprimido de acordo com os arquivos que são referenciados para produção

* Se estiver trabalhando em desenvolvimento é só criar no próprio terminar a variável de DEV. Ele entra com o valor de development e compila no modo normal

        NODE_ENV='development' npm run build

 
# Aula 55 - Adicionando Sourcemaps em nosso código


* Quando se trabalha como módulos, arquivos minificados, fica difícil trabalhar com estes arquivos que estão completamente identados para a compressão.
* Sourcemap - vai mapear o código fonte e diz quem é o que.
  - Para adicionar no webpack é só ir no arquivo e adicionar o código:
            
            devtool: 'source-map',

      - No uglify adiciono o sourceMap

            new webpack.optimize.UglifyJsPlugin({
                  compress: { warnings: false },
                  output: { comments: false },
                  sourceMap: true
            }),

* Caso o código apresente erro ele vai indicar no console qual o arquivo e a linha que está o erro.


# Aula 56 - Inicializando um server com Webpack

* O Webpack nos dá a possibilidade de termos um servidor por trás com o webpack-dev-server.

  - Instalar o webpack-dev-server

        npm install --save-dev webpack-dev-server
 
  - No package.json, criar uma task server e chamar o dev server.
     - inline - ter um refresh a todo instante que faço uma atualizacao no código
     - open - abre uma aba do browser com a index 

     - rodar o npm para subir o servidor:
     
            npm run server