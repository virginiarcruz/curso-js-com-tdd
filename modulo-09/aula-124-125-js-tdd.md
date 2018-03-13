# Aula 124 - Criando método ConvertToHumanTime


- O tempo do tracks está sendo mostrado em milisegundos, vamos criar uma função para alterar isso.

- Criar os arquivos de teste e de src.
- Dentro do js exportar a função recebendo uma `duration``
- fazer o expect para testar os milissegundos. Vai dizer que se eu passar 0ms tem que me mostrar 0:00. Espero que se eu chamar a funcãp convert passando 0 ele vai me passar 0:00;
- fazer outro teste com `1000ms` que é igual a 1 segundo, quero converter tanto pra segundos quanto pra minutos.
    - dentro do js vou fazer um método que converte segundos e minutos.
    - fazer a divisão de ms por 1000 e fazer um módulo por 60 (%60), o resto que tiver que sao os segundo vai aparecer também. Vou fazer o módulo que é pra que o resto que são os segundos, apareça também. Pra não ter risco de aparecer número quebrado faço o parseint.
        ```js 
        let s = parseInt((duration/1000) % 60, 10);
        ```
    - parseint  e, 10 - para não ter risco de número quebrado, e garante que não vai pegar na casa decimal;

- Outro teste com 11000ms, a casa decimal deve ficar em 0:11, então precisamos fazer o seguinte: Se 0 for menor que 10, tenho que colocar um 0 na frente então `0${s}`, senão, coloco o valor de s que tem duas casas decimais. 

    ```js
    s = (s < 10) ? `0${s}` : s;

    return `0:${s}`; // quero que passe 0 e a casa do segundo
    ```

- Para os minutos. Ao invés de dividir por 1000 vou fazer 1000 * 60, porque são os 60 segundos que formam o minuto.

```js
// faz parte dos 60 segundos que formam 1 minuto
const m = parseInt((duration / (1000 * 60)) % 60, 10); 

return `${m}:${s}`;
```


# Aula 125 - Aplicando ConvertToHumanTime no Layout

- Faz o import do convert no arquivo de AlbumTracks.spec.js
- No markup faz a chamada dessa função de convertHumanTime, tanto no arquivo de teste quanto no js.