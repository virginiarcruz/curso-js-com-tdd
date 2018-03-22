# Aula 70 - Introdução aos Hooks do Mocha

* Hooks - aqueles códigos que são rodados, a partir de algum momento ou uma ação que foi executada.
  - ajudam para diminuir o código, duplicação de código. Por exemplo, criar um array só e usar ele várias vezes dentro do teste.


   - before - roda uma vez só antes de cada bloco
   - after - roda uma vez só depois de cada bloco
   - beforeEach - roda todas as vezes, antes de cada bloco
   - afterEach - roda todas as vezes, depois de cada bloco

  - O resultado do teste que fizemos vai ser

        Main
          before
          beforeEach
          test 1
              ✓ test 1
          afterEach
          beforeEach
          test 2
              ✓ test 2
          afterEach
          after
  
# Aula 71 - Hooks na Prática

* Iremos fazer alguns testes com um array. Por exemplo:

        it('should have a size of 4 when push value to the array', function () {
          var arr = [1, 2, 3];
          arr.push(4);
          console.log(arr.length);
        });

        it('should have a size of 2 when pop a value from the array', function () {
          var arr = [1, 2, 3];
          arr.pop();
          console.log(arr.length);
        });

        it('shoul remove the value 3 when use pop in the array', function () {
          const arr = [1, 2, 3];
          console.log(arr.pop() === 3);
        });
  
  - O mesmo array é utilizado várias vezes. Seria interessante não ficar repetindo o código.
  - Posso adicionar a variável criada para o array fora dos its, mas ainda assim ela irá roda pra todos os arrays e não de forma única em cada bloco. No caso acima irá adicionar o 4 ao array e quando rodar o segundo teste será um array de 4 numeros.
  - Preciso rodar um teste único para cada bloco, então posso adicionar o array dentro do **beforeEach**
  - Fora do hook eu defino a variável e dentro do hook adiciono os valores.

        describe('Main', function () {
          var arr;
          before(function () {});
          
          after(function () {  });

          beforeEach(function () {
            arr = [1, 2, 3];
          });

          afterEach(function () { });

          it('should have a size of 4 when push value to the array', function () {
            arr.push(4);
            console.log(arr.length);
          });

          it('should have a size of 2 when pop a value from the array', function () {
            arr.pop();
            console.log(arr.length);
          });

          it('shoul remove the value 3 when use pop in the array', function () {
            console.log(arr.pop() === 3);
          });
        });


  
