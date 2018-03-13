# Aula 126 - Criando um SearchTrigger


- Criar o SearchTrigger.js, não precisa do teste porque isso o browser já faz.
- Exportar os módulos que estão no main e retira-los de lá.


    ```js
    // vou criar uma função que vai criar uma trigger no submit do form que vai realizar o request da const albums
    export default function searchEnterTrigger() {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // vai fazer a requisição que tem que passar o valor do value do input
        spotify.search.albums(searchInput.value)
        .then(data => renderAlbums(data.albums.items, albumList)); 
        // jogar os itens na albumlist
    });
    }
    ```

# Aula 127 - Criando SelectAlbumTrigger

- Para colocar o identificador eu precisaria de um album-id. Preciso passar o id dentro do markup
- Criar dentro do markup um atributo `data-album-id` que vai receber o id do item `data-album-id="${data[0].id}"
- passar esse id em todos os itens, porque só assim vou garantir que esse dado será exibido quando a pessoa clicar em qualquer lugar do markup.
- markup vou colocar em todas as tags em `AlbumList.spec`
- no js também adicionar o id em todo o markup
- Criar uma trigger para o selectalbum - `SelectAlbumTrigger`


```js
// const album = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmR'); - está dentro do request
const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) { // recebe o album
  spotify.album.getAlbum(albumId) // é a chamada do getAlbum vai receber o id para poder fazer a chamada e renderizar o Info e o Tracks
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

// vai ser em cima da lista de albums que temos listAlbums, vai colocar a info qe precisamos. Quando clicar no elemento do listAlbums vou pegar o target para saber de onde estou clicando e vou passar o markeRequest pegando o atributo do data-album-id

export default function selectAlbumTrigger() { 
  listAlbums.addEventListener('click', (e) => {
    const target = e.target;
    makeRequest(target.getAttribute('data-album-id'));
  });
}

```

- No main, importar a trigger criada.


# Aula 128 -  Criando PlaylistTrigger

- Quando clicar na música ela começar a tocar o preview de 30 segundos.
- Criar o arquivo de `PlaylistTrigger.js`
- Preciso de um identificador, para criar um album-id para pegar todas as album-tracks
    - pegar todos os albums-tracks
    - criar a funcion playlisttrigger
    - adicionar o eventlistener de clique para que cada vez que a pessoa clique numa música pegar o target desse clique.

```js
const albumTracks = document.getElementById('album-tracks');
let audioObject = null; // vou criar o object inicialmente igual a null

// criar o export responsável por fazer a trigger
export default function PlaylistTrigger() {
 // add o eventliener de clique, fazendo que cada vez que uma pessoa clique numa música eu pego o target o clique
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;

// se o audio existir ele manda pausar a música
    if (audioObject) {
      audioObject.pause();
    }

    //caso ele não tenha o próximo é pegar um audio baseado do data-track-preview que está no album-track.

    audioObject = new Audio(target.getAttribute('data-track-preview'));
    audioObject.play();
  });
}
```


- Para depois do play definir qual a música que está tocando;
- adiciono uma classe 'active' para quando der o play na música
- quando receber o elemento de pause remover a classe active

  ```js
  audioObject.addEventListener('pause', () => {
          target.classList.remove('active');
        });
  ```

- fazer um if dizendo que se o `target` contiver active eu mando o audio pausar, senão ele pode fazer todo o resto

  ```js
  if (target.classList.contains('active')) {
        audioObject.pause();
      } else { ... }
  ```