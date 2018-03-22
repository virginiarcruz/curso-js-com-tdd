# Aula 89 - Criando arquivos para o Endpoint de Albums


* Criar um arquivo responsável pelo album, tanto em /src quanto em /tests
  - vamos ter esses 2 métodos 
      - getAlbum
      - getAlbums
      - getAlbumTracks

1. Fazer os smoke tests pra saber se os métodos existem
2. Lembrar de fazer os métodos before e afterEach - com a variavel global;
3. Testar os métodos getAlbum e getAlbumTracks
      -  Verificar se o fetch ocorre - should call fetch method
      -  stubedFetch - quando quero chamar o fetch - crio um before each
      -  Verificar se o fetch ocorre com a url desejada, o modifica o id pra carregar de qualquer tipo, usando o template literal

            export const getAlbum = id =>
                  fetch(`https://api.spotify.com/v1/albums/${id}`)


6. Verifica se o dado é recebido pela promise (then.)referencial os nomes dos albuns
   - cria a promise

      
      ``` bash

      import sinonStubPromise from 'sinon-stub-promise';
      sinonStubPromise(sinon);

      it('should return the correct data from Promise', () => {
            # a promise resolvida vai passar o dado album:name
            promise.resolves({ album: 'name' });  
            const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');
            expect(album.resolveValue).to.be.eql({ album: 'name' });
      });

      ```
      



# Aula 90 - Refatorando e reorganizando o código

* Criando o método e testes para getAlbums, com mais de 1 id.
      - Recebe um array com uma lista de ids, o diferencial é que as urls mudam e passa o parametro recebendo ids

                  albums?ids=2i6nd4FV6y7K9fln6eelmR,6peEdPVO73WtgGah5sEhX4
            
* Criando o método e testes para getAlbumTracks
      - quase a mesma coisa, só que no final adicionar "tracks"

                  albums/6peEdPVO73WtgGah5sEhX4/tracks


## Refatorando o código

  1. Criar um arquivo config.js para criar as variáveis (constantes) por exemplo a url que se repete sempre.

      ```bash

            #para a url que se repete muito
            export const API_URL = 'https://api.spotify.com/v1';

            #importar no album js e ao invés de chamar a url toda coloca somente o API_URL
            import { API_URL } from './config';
            
            fetch(`${API_URL}/albums/${id}`).then(toJSON);

      ```
          
      
      2. criar um arquivo de utilitários, é o data que retorna o data.json

                  export const toJSON = data => data.json();
      
      3. mudar o main para search
      4. criar uma index que vai exportar os 2 endpoints.

            import {
                  search, ...
                  } from './search';

                  import {
                  getAlbum, ....
                  } from './album';

                  module.exports = {
                  search,
                  searchArtists,...
            }


      5. no package.json - "main": "src/index.js" para quando criar o babel e umd ele vai exportar tudo corretamente.


      

