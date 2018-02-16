# Aula 89 - Criando arquivos para o Endpoint de Albums


* Criar um arquivo responsável pelo album, tanto em /src quanto em /tests
  - vamos ter esses 2 métodos 
      - getAlbum
      - getAlbumTracks

1. Fazer os smoke tests pra saber se os métodos existem
2. Lembrar de fazer os métodos before e afterEach - com a variavel global;
3. Testar os métodos getAlbum e getAlbumTracks
4. Verificar se o fetch ocorre - should call fetch method
5. Verificar se o fetch ocorre com a url desejada, o modifica o id pra carregar de qualquer tipo, usando o template literal

            export const getAlbum = id =>
                  fetch(`https://api.spotify.com/v1/albums/${id}`)

6. Verifica se o dado é recebido pela promise referencial os nomes dos albuns
   - cria a promise
      
            import sinonStubPromise from 'sinon-stub-promise';
            sinonStubPromise(sinon);

            it('should return the correct data from Promise', () => {
                  promise.resolves({ album: 'name' });
                  const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');
                  expect(album.resolveValue).to.be.eql({ album: 'name' });
            });



# Aula 90 - Refatorando e reorganizando o código

* Criando o método e testes para getAlbums, com mais de 1 id.
* Criando o método e testes para getAlbumTracks
* Refatorando o código: 
