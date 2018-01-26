# Aula 51 - Trabalhando com Imports no ES6

* Explicando o import: [app.js]

        import * as R from 'ramda';

    - _import_:  método from 'biblioteca'app.js
    - _*_  Carrega tudo da lib
    - _as_  => alias para o método (novo nome para o método), estou chamando todos os modulos com _R_
    - Por isso faço o como abaixo: R.union


          const arr3 = R.union(arr1, arr2);

    - Posso usar outro método: **uniq**. Este método vai exibir o array chamado sem repetição

          const arr4 = R.uniq(arr1, arr2);
          (6) [1, 2, 3, 4, 5, 6]


* Dentro do Ramda posso chamar só um método:


        import { union } from 'ramda';
    
    - Posso dar um nome para o método chamado:

          import { union as juntaTudo } from 'ramda';
          const arr3 = juntaTudo(arr1, arr2);
    

    - Posso chamar 2 métodos de uma vez só

          import { union, uniq } from 'ramda';


* Isso é importante porque não fica chamando no código toda a biblioteda com os métodos que não estão sendo utilizados.