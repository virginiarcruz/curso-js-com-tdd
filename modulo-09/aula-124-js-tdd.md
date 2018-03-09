# Aula 124 - Criando método ConvertToHumanTime


- O tempo do tracks está sendo mostrado em milisegundos, vamos criar uma função para alterar isso.

- Criar os arquivos de teste e de src.
- Dentro do js exportar a função recebendo uma `duration``
- fazer o expect para testar os milissegundos. Vai dizer que se eu passar 0ms tem que me mostrar 0:00. Espero que se eu chamar a funcãp convert passando 0 ele vai me passar 0:00;
- fazer outro teste com `1000ms`
    - dentro do js vou fazer um método que converte segundos e minutos.
    - fazer a divisão de ms por 1000 e fazer um módulo por 60
        ```js 
        let s = parseInt((duration/1000) % 60, 10);
        ```
    - parseint  e ,10 - para não ter risco de número quebrado, e garante que não vai pegar na casa decimal;

- Outro teste com 11000ms, a casa decimal deve ficar em 0:11, então precisamos fazer o seguinte:

    ```js
    s = (s < 10) ? `0${s}` : s;

    return `0:${s}`;
    ```

- Para os minutos.

```js
// faz parte dos 60 segundos que formam 1 minuto
const m = parseInt((duration / (1000 * 60)) % 60, 10); 

return `${m}:${s}`;
```
    