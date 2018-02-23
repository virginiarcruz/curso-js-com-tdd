# Aula 98 - Adicionando Token para autorização

- O Spotify tornou obrigatóri a passagem da token

- Gerar o token no [site do Spotify](https://developer.spotify.com/web-api/console/get-search-item/#_=_)

- No arquivo config.js, adicionar o token e o headers

    ```js
        const TOKEN_API = 'BQB1gxow61SGQBZBUxLC32Mix_qke_etS7BJt__Akbe8K1z7KVE2VsiOX_zdWfIu9QaMrpIYhwv3DkeZVqY8uKYBdW2g-ct6kVdoaAdBtpaiTNnOfvIa9qNytnyD4wpjgmlSyZNmlgcxhLk';

        export const API_URL = 'https://api.spotify.com/v1';

        export const HEADERS = {
            header: {
                Authorization: `'Bearer ${TOKEN_API}'`,
            },
        };
    ``

- Os arquivos que utilizam o API_URL, precisa adicionar o HEADERS.
    - Neste caso em albums e search.js
    