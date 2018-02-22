# Aula 91 - Transpilando a biblioteca com Babel

- Vamos preparar a biblioteca para ser publicada no npm.

1. O código está em ES6 e alguns borwsers não interpretam bem, vamos usar o babel para fazer a transpilação.

      ```bash 

      # no package json
      "build": "npm run clear && ./node_modules/.bin/babel --out-dir lib src",

      #para rodar
      npm run build

      ```
  - vai criar uma pasta lib com tudo o que precisa transpilado

2. Outra tarefa build watch, a cada mudança do source, faz a compilação.

          "build:watch": "npm run build -- --watch",

3. criar uma tarefa para limpar a pasta lib para rodar o rim raf lib


# Aula 92 - Utilizando o Webpack para gerar a biblioteca em UMD


- Usar o webpack para transformar a biblioteca em UMD
- UMD é uma forma que trabalhar com os 3 padrões de módulo: AMD, common JS, export para browser
- Vai ser útil porque quando eu quiser usar no browser eu coloco tudo dentro de um arquivo só que é o webpack.config

```bash

      import {join} from 'path'
            const include = join(__dirname, 'src')

            export default {
                  entry: './src/index',
                  # vai criar a pasta /dist - vai ser responsável por guardar os arquivos em UMD
                  output: {  
                  path: join(__dirname, 'dist'),
                  libraryTarget: 'umd',
                  library: 'spotifyWrapper', #defino o objeto
                  },
                  devtool: 'source-map',
                  module: {
                  loaders: [
                        {test: /\.js$/, loader: 'babel-loader', include},
                  ]
            }
      }

```

- Instalar o webpack e o babel loader e editar o package.json para criar os builds da umd

            npm install --save -dev webpack babel-loader

      ```bash

      # vou dizer o nome que eu quero para os arquivos
      "build:umd": "./node_modules/.bin/webpack --output-filename spotify-wrapper.umd.js",
      "build:umd:min": "./node_modules/.bin/webpack --output-filename spotify-wrapper.umd.min.js -p",

      #para rodar
      npm run build:umd

      ```


- Criar um comando build all - vai ser responsável por chamar todos os builds.

            
            "build:all": "npm run build && npm run build:umd && npm run build:umd:min",


# Aula 93 - Criando um exemplo simples com a biblioteca em UMD


## Exemplo utilizando a biblioteca UMD

- Criar o index.html chamando o umd criado

        <script src="../dist/spotify-wrapper.umd.js">  </script>

- Para testar no browser é só chamar no console o nome que demos para a função: spotifyWrapper e testo o json 

```bash
#crio a const
const albums = spotifyWrapper.searchAlbums('Incubus');
albums.then(data => console.log(data));
```


### Para imprimir na tela todos os albums de um artista

```bash
<script>
    const albums = spotifyWrapper.searchAlbums('Incubus');
    const albumsEl = document.getElementById('albums');

    album
      .then(data => {
        markup = data.albums.items.map( item =>  # fazer um map de cada item
          `<img src="${item.images[0].url}" alt="${item.name}" /> `
        ).join('') # responsavel por juntar todas as imagens para o markup

        albumsEl.innerHTML = markup;
      })

  </script>
```