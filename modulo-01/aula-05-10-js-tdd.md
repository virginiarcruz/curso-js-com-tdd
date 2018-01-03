# Aula 05 - Javascript com TDD na Prática
## Padrões de Código


* Style Guide - não haverá dificuldades se o código segue um padrão de desenvolvimento. Garante um padrão de código.
Utilizaremos do Airbnb: https://github.com/airbnb/javascript, https://github.com/standard/standard ou https://github.com/rwaldron/idiomatic.js/

* ESLint - responsável por receber as regras e ver se os arquivos respeitam as regras. Checa o código todo. Ler todos os arquivos.
    - https://eslint.org



# Aula 06 e 07 - Instalando e Utilizando o ESLint 

* Instalar o **ESLint** como save-dev pra garantir que ele fique nas dependências do projeto. Instalar local e não globalmente.

        npm install eslint --save-dev

* Inicializar o ESLint e suas configurações

        ./node_modules/.bin/eslint --init

* Para verificar os erros de código

        ./node_modules/.bin/eslint src/*.js

* Post sobre ESLint:
        https://willianjusten.com.br/analisando-seu-codigo-js-com-linter/




# Aula 08 - EditoConfig

* Precisamos ter um arquivo .editorconfig e definir as configurações que queremos pra ele.




# Aula 09 - Criando um Npm Script

* npm script - executado direto pelo npm.
* no arquivo package.json, em scripts posso criar comandos para serem ativados quando fizer um npm run

        "lint": "./node_modules/.bin/eslint src/*.js",
        npm run lint
 
  - rodar o comando ele já vai automaticamente verificar o código por completo.


# Aula 10 - Configurando hooks no git

* Husky - é um script que permite criar hooks do git de forma mais fácil
  - Hooks são ações que são executadas antes de fazer determinada tarefa. Por exemplo: Antes de fazer commit faz isso.
  - Pode ser ações antes ou depois

* Instalar o Husky

        npm install husky --save-dev

* Criar os scripts que quiser:
        https://github.com/typicode/husky
  - no package.json, abaixo do comando lint que criamos em scripts adicionar o comando "pre-push" e mandar ele executar o lint. Então antes de todo push ele vai executar esse comando.

        "pre-push": "npm run lint",