# Aula 120 - Criando componente AlbumInfo

- Criar o arquivo de teste e dentro de src
- O código vai ser muito semelhante ao AlbumList então iremos reaproveitar algumas coisas.
    - jsom, chai

- criar e fazer append no markup ao receber um data correto.
- Em AlbumInfo.js, criar a função renderAlbumInfo com (data, element)
- Criar o markup que quero para o AlbumInfo
- Criar data, vou copiar os dados do AlbumList
- E no 'should...':

    ```js
    it('should creat and append the markup give a correct data', () => {
    const element = document.createElement('div'); //criar o elemento
    renderAlbumInfo(data, element) // vai chamar esse elemento passando estes paramentros

    expect(element.innerHTML).to.be.eql(markup);
    //espero que dentro do element, innerHTML, seja igual ao markup que vou criar.
    ```

- em renderAlbumInfo, vou criar a variável markup e colocar dentro de element.
- atualizar os dados dentro da const sobre a img do album, title e total de músicas
- em renderAlbumInfo, adicionar as tags para procurar dentro de `data` os dados do album.

    ```js
    <img class="album-image" src="${data.images[0].url}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Músicas</p>
    ```


# Aula 121 - Adicionando AlbumInfo no Layout

- No `main.js`, 

```js
import renderAlbums from './AlbumInfo'; //importo AlbumInfo

// crio a const que vai receber o id de um album.
const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4'); 
// pego o elemento pelo id
const albumInfo = document.getElementById('album-info');

// e então chamar os dados do album para dentro do elemento albuminfo
album
  .then(data => renderAlbumInfo(data, albumInfo));
```

- Lembrar de no ÀlbumInfo.js`, editar o código para criar a function createMarkup;


# Aula 122 - Criando componente AlbumTracks


- Similar aos outros códigos criados antes.
- Criar o arquivo de teste e dentro do src
- no arquivo de teste adicionar o data e o markup
- no expect dizer que e ele fará um append quando o markup for igual ao markup criado.

    ```js
    it('should create and append the markup given a correct data', () => {
        const element = document.createElement('div');
        renderAlbumTracks(data, element);

        expect(element.innerHTML).to.be.eql(markup);
    });
    ```

- em AlbumTracks, adicionar os itens para carregar os dados dinamicamente

- Se eu passar mais de uma música:


# Aula 123 - Adicionando AlbumTracks ao Layout

No `main.js`:
  - Importar AlbumTracks 
  - Dentro de album, que é onde tem os dados do album, fazer mais um then para fazer um render AlbumTracks
    - o renderAlbumInfo precisa retornar um data pra que eu consiga encadear um outro.
    - no `AlbumInfo.spec`, fazer outro expect
        ```js
        it('should return the data', () => {
            const element2 = document.createElement('div');
            // espero que quando eu chame esse método que o retorno seja igual a data que ele tá recendo.
            expect(renderAlbumInfo(data,element)).to.be.eql(data); 
        });
        ```
    - em `AlbumInfo.js`, vamos adicionar um `return data`;