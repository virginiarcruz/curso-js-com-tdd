# Aula 79 - Introdução da Biblioteca

* Utilizando uma API - search spotify
  - https://developer.spotify.com/web-api/console/get-search-item/


# Aula 80 - Clonando o Boilerplate e editando


* Clonar o repositório do curso novamente e editar para o nome spotify-wrapper
  - editar package.json e readme


# Aula 81 - Criando Smoke Tests

* Criando a interface da biblioteca de acordo com a API do Spotify
  - search é o único que posso trabalhar de forma humanizada.

* Abrir um describe com o smoke tests que são muito importantes
      - Search genérico - + de 1 tipo
      - searchAlbums
      - searchArtists
      - searchTracks
      - searchPlaylists
  - Criar um it para cada método e criar os métodos de cada um no main.

# Aula 82 - Instalando Sinon e dependências

* Implementação da Biblioteca - sempre quando vou trabalhar em algo específico crio um bloco.
  - crio um novo bloco para o Generic Seach - ele tem que bater no endpoint e responder algo. Tem que saber se quando eu bater no endpoint ele vai criar um ajax pra url que eu quero.
  - quando chamar o search ele chamar o método fetch
  - pra fazer verificações de que foi chamado ou não uso o Sinon

* SinonJs - é responsável por "vigiar" os métodos, e avisar se o método foi ou não chamado.
  - Spies - vai verificar se a função original foi chamada, ou seja, a função continua sendo executada
  - Stubs - são como os spies, só que tem o comportamento pré programado, a partir dele consigo definir que, caso seja chamado 'tal método', aconteça 'tal coisa'.
  - Instalar o Sinon, sinon-stub-promisse e o node-fetch

            npm i --save-dev sinon sinon-chai sinon-stub-promise node-fetch

# Aula 83 - Utilizando o calledOnce

* importar o sinon, sinon-chai e o sinon stub promise no arquivo do teste.
* importar o proprio chai

            import chai, { expect } from 'chai';
            import sinon from 'sinon';
            import sinonChai from 'sinon-chai';
            import sinonStubPromise from 'sinon-stub-promise';
            chai.use(sinonChai);
            sinonStubPromise(sinon);

* chamar o stub - passar dentro do elemento global eu quero fazer um stub no método fetch
  - tenho que requerer o fetch que instalei.

            const fetchedStub = sinon.stub(global, 'fecth');
            global.fetch = require('node-fetch');

      - vai fazer com o que habilite na interface o global fetch
      - espero que o fectchedStub seja chamado uma vez.

            expect(fetchedStub).to.have.been.calledOnce;

  - crio o método fetch com a url que quero chamar

            export const search = () =>
                  fetch('https://spotify.com')

# Aula 84 - Utilizando o calledWith

* Quero verificar se ele está utilizando a url correta para fazer o teste

            it('should receive the corret url to fetch', () => {
                  const fetchedStub = sinon.stub(global, 'fetch');
                  const artists = search('Incubus', 'artist');

                  expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

            });

* no it anterior que ja faço um fetch preciso fazer um restore()

            fetchedStub.restore();

* A url do main precisa ser a mesma do teste
* Adicionar a const com o album, preciso corrigir a forma que estou recebendo.
* No mais, colocar de forma que eu possa no search procurar o tipo que eu quiser procurar, para que possa buscar por exemplo, artist e album

            export const search = (query, type) =>
                  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)



# Aula 85 - Utilizando context e refatorando código de teste

* Quando quero passar mais de um tipo:
  - criar um contexto passando 1 tipo só
  - criar outro contexto passando mais de 1 tipo

            context('passing more then one', () => {
                  const fetchedStub = sinon.stub(global, 'fetch');
                  const artistsAndAlbums = search('Incubus', ['artist', 'album']);

                  expect(fetchedStub).to.have.been
                  .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
  - toda hora estou chamando o 
  
            const fetchedStub = sinon.stub(global, 'fetch');

      - e o restore()

  - vou criar um beforeEach e um afterEach para eles.
    - deixo a variável global pra todo mundo usar
                  
            let fetchedStub;

            beforeEach( () => {
                  fetchedStub = sinon.stub(global, 'fetch');
            });

            afterEach(() => {
                  fetchedStub.restore();
            });


# Aula 86 - Retornando Promises

* Quando faço um fetch ele retorna um dado e ele não é muito bem estruturado.
* Vou converter os dados para json

            .then(data => data.json())
      
      - nesse caso, acabo quebrando alguns testes que estão fazendo o search.
      - preciso fazer com que o fetchedStub retorne uma promise

            fetchedStub.returnsPromise();

* Preciso retornar se o dado que estou recebendo da promisse é o dado que retorna no método.

            it('should return the JSON Data from the Promise', () => {
                  promise.resolves({ body: 'json' }); //o dado ja foi recebido e pode entregar pro teste
                  const artists = search('Incubus', 'artist');

                  expect(artists.resolveValue).to.be.eql({ body: 'json' }); // verifico se os dados são iguais ao parametro passado

            });


# Aula 87 - Escrevendo testes para métodos restantes

* Criar outro describe para o próximo método
  - No teste posso procurar por mais de um artista, e o main chamo o método search com a query principal e modificando apenas o tipo

            describe('searchArtists', () => {
                  it('should call fetch function', () => {
                        const artists = searchArtists('Incubus');
                        expect(fetchedStub).to.have.been.calledOnce;
                  });

                  it('should call fetch with the correct URL', () => {
                        const artists = searchArtists('Incubus');
                        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

                        const artists2 = searchArtists('Muse');
                        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
                  });
            });

            export const searchArtists = (query) =>
                  search(query, 'artist');


# Aula 88 - Rodando um exemplo no Node

* Criando um exemplo real da Aplicação.




