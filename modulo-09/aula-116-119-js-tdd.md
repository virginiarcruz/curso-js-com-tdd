# Aula 116 - Criando o Markup Básico da Aplicação


- Fazer a estrutura inicial do HTML para o player.
- O HTMlt estático está pronto para fazermos as iterações.

# Aula 117 - Importando a Biblioteca do Spotify Wrapper

- Importar a biblioteca criada anteriormente do [spotify wrapper](https://github.com/willianjusten/spotify-wrapper)

1. Vou importar o módulo `spotify`, "espero que seja um objeto", crio o arquivo para o módulo
2. faço o `it` para os modulos de search, tenho que fazer o está descrito no `How to use`, fazer o import e passar o token, para o `Spotify.js`

    ```js
    import SpotifyWrapper from 'spotify-wrapper';

    const spotify = new SpotifyWrapper({
    token: 'YOUR_TOKEN_HERE'
    });
    ```

3. Instalar a biblioteca, somente com `--save` porque ela é uma dependência da aplicação. Após instalado rodar novamente o `test:tdd`

        npm install --save spotify-wrapper

4. tenho que exportar o elemento spotify e agora ele irá encontrar os méotdos.
5. Criar o expect para `spotify.album`

    ```js
    import { expect } from 'chai';
    import spotify from '../src/spotify';

    describe('Spotify', () => {
    it('should be an objetc', () => {
        expect(spotify).to.be.an.object;
    });

    it('should have search methods', () => {
        expect(spotify.search).to.exist;
    });

    it('should have album methods', () => {
        expect(spotify.album).to.exist;
    });
    });
    ```


# Aula 118 - Criando componente de AlbumList

- O primeiro que vou fazer é o list-item que temos no HTML. Responsável por mostrar todos os albums.
    - criar um arquivo AlbumList.js e ainda o AlbumList.spec.js
- importar na biblioteca de testes o método renderAlbums dentro de AlbumList e no describe, fazer um expect para "espero que ele exista"

- vou criar um conjunto de dados que recebo do spotify, que o renderAlbums precisa receber e renderizar. Vou colocar dentro do arquivo de teste de `AlbumsList.spec.js` como uma `const`
    - Os dados gerados no `const` podem ser obtidos no [site do spotify](developer.spotify.com/web-api/console/get-search-item)

- quero que o renderAlbums(AlbumsList.js) receba uma data e um elemento e renderize dentro desse elemento todo nosso markup. "crie o markup e atenda esse markup com os dados corretos"
    - o markup tem que ser igual ao `list-item`do index.html.
    - preciso também criar o elemento para fazer o append.

- dentro do node, nós não temos controle sobre o DOM, para ter acesso ao DOM precisamos usar o jsdom-global, que permite injetarmos com document e window dentro do node.
    - instalar a biblioteca
           
            npm install --save-dev jsdom jsdom-global
    - preciso fazer a chamada da biblioteca no topo

- fazer um createElement dentro do it para o markup:

    ```js
      it('should create and append the markup given a correct data', () => {
            const element = document.createElement('div');
            // vou chamar o renderAlbums que vai receber um data e o data vai jogar para dentro do element
            renderAlbums(data, element); 
            // espero que dentro do element eu tenha um markup igual ao de cima
            expect(element.innerHTML).to.be.eql(markup);
        });
    ```

- no `AlbumList.js`, preciso criar o markup e jogar ele dentro do elemento que ele receber.

            element.innerHTML = markup;

- Adicionar os dados de const dentro do markup e o teste vai passar
- Ocorre que estou pegando os dados só de 1 elemento, vou criar um novo teste, para dizer que quando eu tiver mais de 1 album ele deve continuar criando.
    - Crio um novo markup e uma nova const para fazer esse teste

- Em `AlbumList.js` faço um map, que vai ficar fazendo um loop pegando todos os itens de data e gerar o markup, dentro do data vou ter o album que é o item que vai fazer uma função e preencher o list-item, então ao invés de `data[0]`, terei `album`
    - ao final coloco o `.join('')` que ele vai pegar os dados e vai juntando.


- Para deixar os dados separados, vou criar uma função interna `createMarkup` que retorna o data.map

```js
function createMarkup(data) { //recebe um data que é o data do renderAlbums
 return data.map(album => `
  <div class="list-item">
    <img src="${album.images[2].url}" alt="${album.name}" class="list-image">
    <div class="list-description">
      <p class="list-title">${album.name}</p>
      <p class="list-subtitle">${album.artists[0].name}</p>
    </div>
  </div>`).join('');
}

export default function renderAlbums(data, element) {
  const markup = createMarkup(data);// vai ser a chamada daquele método criado acima

  element.innerHTML = markup;

}
```

# Aula 119 - Adicionando o AlbumList no Layout

- Adicionar os albums na interface
- Importar o objeto spotify criado dentro do `Spotify.js`
- Gerar um token e substituir no spotify.js
- apagar tudo que temos de list-item porque ele será criado dinamicamente. E adicionar um `id` em list.
- no `main.js` vou importar o `renderAlbums` e criar uma const albums que vai ser a busca do spotify.
- para vermos o que tem dentro do `data` podemos fazer o seguinte

    ```js
    albums
    .then(data => console.log(data))
    ```
- precisamos criar uma variável para capturar o album-list criado e adicionar o conteúdo dentro dele. Vou colocar os dados dentro de albumList.

    ```js
    const albumList = document.getElementById('album-list');

    albums
    .then(data => renderAlbums(data.albums.items, albumList))
    ```