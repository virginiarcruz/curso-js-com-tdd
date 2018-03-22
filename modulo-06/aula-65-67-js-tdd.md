# Aula 65 - Apresentando Ferramentas

* Ferramentas 
  - Mocha - usada para rodar os testes
    - https://mochajs.org
    

  - Chai - faz as asserções
    - http://chaijs.com


  - SinonJS - usado para fazer o spie, stubs e mocks
     - http://sinonjs.org


# Aula 66 - Iniciando a estrutura com Mocha e Chai

* utilizar a estrutura que fizemos no primeiro módulo.
* instalar o mocha e o chai

        npm install --save-dev mocha chai

* Estrutura do teste montada no diretório dos exercícios.

- no package.json, adicionar a linha

      "test": "./node_modules/.bin/mocha tests/**/*.spec.js"
  
  - vai verificar todos os arquivos terminados com spec dentro da pasta tests


# Aula 67 - Funcionamento do Mocha - describe, context, it...


* describe - descreve os testes de uma certa função, método, arquivo.
  - posso ter vários describes por arquivo.

        describe('descricao/ou nome da classe', function(){
            onde rodam os testes
        });


* context - serve para separarmos os casos de teste. 
  - Se tenho um método e nele tenho 2 casos em que ele receba e faça coisas diferentes, crio um contexto para o caso 1 e outro contexto para o caso 2.

        context('caso 1, function(){
           podem ser do mesmo método mas tem casos de teste diferentes.
        });

  - Serve para separar os casos que vamos ter

* Para rodar os testes usamos o **it**
  - A primeira coisa passa é o que deve acontecer.

      it('deveria acontecer tal coisa/deveria somar 2+2', function () {
         aqui o que eu espero que aconteça
      })
    
  - é o que entra de dados e o que espera retornar.
  - se crio um método de soma, espero que retorne um valor 4. Se retornar 4 o teste vai dar um valor de **true**, senão ele vai retornar **false**

      describe('Main', function () {
        describe('Method A', function () {
          context('Case 1', function () {
            it('should happen blabla', function () {
              // espera que aconteça
              // entrada de dados - metodo
              // espera retornar
            });
          });
          context('Case 2', function () {
            
          });
        });
        describe('Method B', function () {
        
        });
      });