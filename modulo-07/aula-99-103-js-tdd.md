# Aula 99 - Refatorando para Classe/Construtor


- O problema de passar o token diretamente no config, você envia o token diretamente para o npm, isso não é legal.
- Se eu quiser passar o token como uma option isso não é possível.
- Esse token tem um tempo de expiração de 2h então eu teria que a cada duas horas ficar atualizando.

## Refatorando

- Vamos trabalhar com o sistema de classes e construtores que temos no ES6

1. Criar um arquivo **index.spec.js** na pasta de tests
    - a primeira coisa é que eu quero conseguir criar é uma instância do spotifyWrapper

        ```js
            import { expect } from 'chai';
                import SpotifyWrapper from '../src/index';
                describe('SpotifyWrapper Library', function () {
                it('should create an instance of SpotifyWrapper', () => {
                    let spotify = new SpotifyWrapper({});
                    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
                });
            });
        ```
    - Fazer o construtor - na index, tem que criar as classes e excluir o module.exports que havia anteriormente

            export default class SpotifyWrapper {}
    
    - Quero trabalhar com o construtor
        - vou checar se existe a apiURL
        - crio o construtor com as options no index
        - coloca no contrutor a opção do API_URL e importa
    
    - Ja temos uma opção de url, quero que caso a pessoa não coloque a urlnas opções ele assuma a url padrão
    - quero que ele também possa receber o token



# Aula 100 - Criando método de request no objeto da Classe

- Token é utilizado para a passagem dos header, pra fazer de uma forma que o request pegue sempre o token que a gente passa para o objeto, dentro da biblioteca do SpotifyWrapper tenho o método request e ele vai ser o responsável por fazer a requisição.

- Primeira coisa a fazer é verificar se o método request existe.
    - Método request recebe uma url e o headers, então vamos fazer a mesma coisa.

- Importar os métodos do sinon e do chai como na lib anterior de **album.spec.js** e usar o before e o after
- Quando rodar o request chamar o fetch
    - vou rodar o spotify request com uma url
    - espero que o stubedfetch seja chamado uma vez.

- Tenho que verificar se o request está sendo chamado com a url correta.

    ```js
        it('should call fetch with rigth url passed', () => {
            let spotify = new SpotifyWrapper({
            token: 'foo'
            });
            spotify.request('url');
            expect(stubedFetch).to.have.be.calledWith('url'); // quero que seja chamado passsando essa irl
        });
    ```


- Tenho fazer a mesma coisa para verificar se o headers está funcionando.

    - crio o método para verificar o headers e chamo esse método na index.js

    ```js
    it('should call fetch with rigth headers passed', () => {
    let spotify = new SpotifyWrapper({
        token: 'foo'
    });
    const headers = {
        headers: {
        Authorization: `'Bearer foo'`,
        },
    };
    spotify.request('url');
    expect(stubedFetch).to.have.be.calledWith('url', headers); // quero que seja chamado passsando essa irl
    });

    // na index
    
    request(url) {
        const headers = {
        headers: {
            Authorization: `'Bearer ${this.token}'`,
        },
        };

        return fetch(url, headers);
    }
    ```

# Aula 101 - Refatorando o método para Albums

- Refatorando o arquivo de album;

1. Elimina os imports e o global fetch;
2. Cria uma function para chamar **album()** e retorna os métodos gets dentro dela

    ```js
    export default function album() {
        return {
            getAlbum: id => this.request(`${this.apiURL}/albums/${id}`), // estou chamando um id, então ele vai chamar o this.request passando a url
            getAlbums: ids => this.request(`${this.apiURLL}/albums?ids=${ids}`),
            getTracks: id => this.request(`${this.apiURLL}/albums/${id}/tracks`),
        };
    }
    ```

3. No arquivo de teste do album, onde todos os métodos de get são chamados vou trocar pela biblioteca spotifyWrapper

        import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

    por

        import SpotifyWrapper from '../src/index';

    - tenho que na index, fazer a chamada desses métodos, importo o album que criei e chamo ele no request
    - passo o album para o construtor, dando um _bind_, ligando o this para dentro do album.

4. no before each tem que criar o objeto spotify
5. o que estiver chamando somente getAlbum, trocar por spotify.album.getAlbum e assim troca nos outros métodos.



# Aula 102 - Refatorando os métodos de Search

- Faz a mesma coisa de limpar o código que foi feito em album.js
- Cria um método **searcher** para retornar o `this` e a `query`
- cria o outro método **search** com o que eu quero retornar
- na index.js apaga o import com o que temos de search
- repete o mesmo que fez em albums no arquivo de testes, importa a biblioteca de SpotifyWrapper e chama todos os métodos que tiverem somente o `searchArtists`, troca para `spotify.search.artists`
- Apaga o describe Generic Search porque não há mais necessidade dele


- Para testar se tudo está funcionando vamos ao example de albums.js

    - importo a SpotifyWrapper
    - crio o construtor chamando o token e em albums chamo ``spotify.search.albums``
    - para rodar o que foi feito, entro na pasta examples e faço o comando ``babel-node albums.js``



# Aula 103 - Atualizando Webpack para gerar UMD a partir de Classes

- Para o webpack entender eu tenho que fazer um export default

1. Criar um arquivo na raiz que vai ser `index.js` e fazer um export default

        module.exports = require('./src/index).default;

    - com isso estou dizendo para o webpack pegar tudo o que tem da classe exportada.

2. no webpack no entry coloco só ./index
3. na index.html
    - criar a const do construtor new SpotifyWrapper passando o token.