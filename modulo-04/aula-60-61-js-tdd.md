# Aula 51 - Trabalhando com Imports no ES6

* Explicando o import: [app.js]

        import * as R from 'ramda';

    - _import_:  método from 'biblioteca' app.js
    - _*_  Carrega tudo da lib
    - _as_  => alias para o método (novo nome para o método), estou chamando todos os modulos com _R_
    - Por isso faço o como abaixo: R.union


          const arr3 = R.union(arr1, arr2);

    - Posso usar outro método: **uniq**. Este método vai exibir o array chamado sem repetição

          const arr4 = R.uniq(arr1, arr2);
          (6) [1, 2, 3, 4, 5, 6]


* Dentro do Ramda posso chamar só um método dentro do ramda:

        import { union } from 'ramda';
    
    - Posso dar um nome para o método chamado:

          import { union as juntaTudo } from 'ramda';
          const arr3 = juntaTudo(arr1, arr2);
    

    - Posso chamar 2 métodos de uma vez só

          import { union, uniq } from 'ramda';


* Isso é importante pra que o código não fique chamando  a biblioteda com os métodos que não estão sendo utilizados.


# Aula 52 - Trabalhando com Exports no ES6

* Export - serve pra conseguir exportar uma variável ou um método para que outros arquivos consigam utilizar.
  - Crio o arquivo utils.js e adiciono o método que quero exportar.
  - importo dentro de app.js, que é onde vou chamar o método.
  -  Dentro do arquivo que chamo o método posso mudar o nome dele, por exemplo:
      - No export ele ele é _sum_
      - No import posso chamar de _soma_ se quiser então ficaria

            import soma from './utils.js';
            console.log(soma (3, 2));

* Named export - permite ter vários export dentro de um mesmo arquivo mas só posso chamar com o mesmo nome e o import precisa das chaves pra ele entender que é um pedaço do meu módulo

   - posso fazer direto

            export function sub(a, b) {
              return a - b;
            }
            import sum, { sub } from './utils.js';

  - posso fazer separado

            function mult(a, b) {
              return a * b;
            }
            export { mult };
            import sum, { sub, mult } from './utils.js';
  
  - posso fazer vários métodos e chamá-los dentro do mesmo export que criei.

             export { mult, div }

  - dentro do export posso mudar o nome do método.

            export { mult as multiplicacao, div };
            import sum, { sub, multiplicacao, div } from './utils.js';
            console.log(multiplicacao(3, 2));

  - dentro do import eu também posso criar um alias do método

            import sum, { sub, multiplicacao, div as dividir } from './utils.js';
            console.log(dividir(4, 2));

* Também é possível exportar variáveis, adicionando da mesma forma que os métodos são adicionados.