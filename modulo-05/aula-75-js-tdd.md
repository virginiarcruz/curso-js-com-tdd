# Aula 75 - Convertendo e testando em ES6


* Vamos precisar utilizar o babel para que ele funcione em todos os browsers sem haver problema.
  1. Instalar o babel

          npm install --save-dev babel-preset-env babel-register

  2. Criar um arquivo .babelrc, para ele verificar no ambiente o que tem que compilar para que dê compatibilidade.
          
          { presets: ['env'] }


## Convertendo os arquivos para ES6

- faz os imports 
- adiciona require e babel test no package.json
- converter as funções em () =>

* converter o arquivo do test (main.js)

 - criar uma variavel pra cada metodo
 - exportar as variáveis
 - na calc tem que exportar da mesma forma do teste
 - exclui o método calc que não será necessário
 - Nào precisa mais do calc., chama os métodos direto.


* main.js

        const sum = (num1, num2) => num1 + num2;
        const sub = (num1, num2) => num1 - num2;
        const mult = (num1, num2) => num1 * num2;
        const div = (num1, num2) => ((num2 === 0) ? 'Não é possível divisão por zero!' : num1 / num2);

        export { sum, sub, mult, div };


# Aula 76 - Criando um FizzBuzz com TDD

- exercício do FizzBuzz

# Aula 78 - Aplicando o Code Coverage

* Vai analisar todos os pedaços do código que o teste executou.
  - consegue analisar se alguma parte do código não foi testada.
  - instalar a biblioteca

        npm install --save-dev nyc

  - adicionar a linha do teste no package.json

        "test:coverage": "nyc npm test"
 
  - para rodar o teste

        npm run test:coverage

  - adicionar regras do nyc no package.json

  - quando rodar ele vai criar vários arquivos numa pasta coverage, dentro tem uma index.html, ao abrir será exibido o teste e quantas vezes ele passou por cada linha do código.

# Aula 79 - Rodando check-coverage antes de cada push

- Para determinar que por exemplo o código tenha pelo menos 80% passado
- No nyc adicionar as regras para passar pelas funções e linhas
- adicionar no prepush o test:coverage