# Aula 68 - Reporters do Mocha


* https://mochajs.org/#reporters
* Se rodar o código feito até agora:

      npm test

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
  - a utilidade de ter a separação em blocos, você sabe exatamentete onde está cada coisa.


* Reporter - é como informo como os testes estão passando. Posso ter vários reporters.
  - pra ver quais eu tenho posso fazer o comando abaixo que ele exibe uma lista de quais reporters eu tenho.

        npm test -- --reportes

    - vai exibir uma lista de reporters e posso escolher qual eu quero. Por exemplo:

            npm test -- --reporter=nyan

    
# Aula 69 - Comandos Skip, Only, Bail

## Bail

* Provocar um erro no it, ele vai rodar tudo e exibir onde está o erro.

        throw new Error('just on error');

* Quero fazer com que ele pare naquele erro, pare tudo e fique naquele erro.

        npm test -- --ball

  - Ele já roda e para no primeiro erro que encontra
  - é útil porque vou corrigindo pedaço por pedaço


## Only

* Tenho um conjunto de testes mas quero rodar só um bloco em específico.
  - Tenho o método only, então vou adicionar onde quero rodar somente.

        context.only('Case 2', function () {
          it('should happen Outroblabla', function () {

          });
        });


## Skip

* Serve para falar que não quero rodar aquele teste em específico.

        it.skip('should happen blabla', function () { });
        
    - Vai passar aquele erro que não quero tratar agora.
