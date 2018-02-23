# Aula 95 - Integrando com o Travis CI


- Travis - trabalha com integração contínua;

- Para fazer funcionar: [link do docs para travis](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

- Precisa ter um arquivo .travis.yml, dentro dele determinar qual a linguagem que vai trabalhar, a versão do node.
    - node.js

- Criar a conta no travis e adicionar os repositórios do git.
    - Roda a build com o travis




# Aula 96 - Integrando com o Coveralls

- Coveralls - recebe as informações do coverage e exibe no browser.
- [Acessar o site](coveralls.io)
    - Fazer login com id do github
    - Adicionar o repositório desejado
    - Clicar em details e ele exibe as configurações necessários para colocar no Travis;
    - Instalar o coveralls

            npm install --save-dev coveralls
    
    - Adicionar no package.json

            "coveralls": "npm run test:coverage && nyc report --reporter=text-lcov | coveralls"

    - modificar uma linha no travis.yml para rodar 

            after_success:
                - npm run coveralls

    - commita tudo novamente, roda a build no travis, quando atualizar o coveralls ela vai exibir a página configurada corremente.


# Aula 97 - Publicando a biblioteca no NPM


- Ao publicar no npm permite que a pessoa procure o pacote no npm e instle somente com um código

- Definir uma versão para o projeto no package.json
    - commita e cria uma tag com o mesmo número da versão antes do git push

        git tag 1.0.1
    
    - no package.json definir quais os arquivos serão gerados no pacote para evitar que o usuário baixe arquivos desnecessários
    - no main - modificar o src/index para lib/index

- Publicar com o 

        npm publish