# Aula 72 - Métodos do Chai

* A biblioteca que faz os testes acontecerem, o chai é responsável por cada **it**
* Site do chai: http://chaijs.com
  - shoul, expect, assert
  - 3 modalidades que podemos usar.
  - Vamos trabalhar com o expect que é o mais comum

    * http://chaijs.com/guide/styles/#expect
    * http://chaijs.com/api/bdd/


* Vamos utilizar o expect no teste que estamos fazendo.

        expect(arr).to.have.lengthOf(4);

- Eu espero que o array tenha um tamanho de 4, ele vai exibir resultado true ou false

- Para ficar assistindo as modificações adiciono no package.json o comando test:tdd para o whatch

        "test:tdd": "./node_modules/.bin/mocha tests/**/*.spec.js --watch"


Include - verifica se tenho um item dentro do string ou array

Exemplos:

- espero que o array não tenha incluso o valor 3
          
        expect(arr).to.not.include(3);

- espero que o array tenha o tamanho de 2

        expect(arr).to.have.lengthOf(2);

- espero que o array seja como um array

        expect(arr).to.be.a('array');

   - esse teste para testar tipos é chamado de smoke test, que é o mais básico de todos


- deve retornar true quando na hora que rodar o pop o valor seja 3