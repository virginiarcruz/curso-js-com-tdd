# Aula 73 - Criando uma calculadora simples - Pt1


- Criar uma branch calc

1. Fazer o smoke test que verifica o funcionamento básico do método. Pra calculadora eles serão as operações de + - / *
  - Se a biblioteca calculadora existe
     - para isso preciso fazer a requisição da calc no main.js

                var calc = require('../src/main.js');

  - Se os métodos sum, sub, mult e div existem e se são funções uma função

        it('should exist the calc lib', function() {
                expect(calc).to.exist;
        });

        it('should exist the method `sum`', function() {
                expect(calc.sum).to.exist;
                expect(calc.sum).to.be.a.function;
        });

        it('should exist the method `sub`', function() {
                expect(calc.sub).to.exist;
                expect(calc.sub).to.be.a.function;
        });

        it('should exist the method `mult`', function() {
                expect(calc.mult).to.exist;
                expect(calc.mult).to.be.a.function;
        });

        it('should exist the method `div`', function() {
                expect(calc.div).to.exist;
                expect(calc.div).to.be.a.function;
        });


# Aula 73 - Criando uma calculadora simples - Pt2

- Testar o método soma e as outras operações