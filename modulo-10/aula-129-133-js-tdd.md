# Aula 129 - Apresentando o CLI

- Converter bitcoins para a moeda que você desejar,
- [Link do repositório para o CLI](https://github.com/willianjusten/btc-converter)

# Aula 130 - Editando o package.json

- Fazer o clone do js-tdd-course e editar o package.json com as informaçoes da CLI
- No `package.json`
    - Adicionar o reporter nyan para melhorar o test
    - preferGlobal - quando publicar no npm ele mostra onde é pra instlar, neste caso de forma global.
    - bin - definir o binário, ou seja, o arquivo que ele vai rodar.

# Aula 131 - Iniciando a CLI e testes

- na cli quando quero executar algo eu faço ./src/main.js - o ./ diz que é executável. Vou criar uma const para isso.
    - `exec` - é uma função que recebe dois parâmetros o btcConverter e a outra uma função com mais 3 parâmetros (erro, saida pro terminal, saida de erro).
        - consigo rodar qualquer comando como se tivesse no terminal.

- O comando é assincrono, então tem que esperar o terminal aparecer para fazer o teste. Nesse caso de assincro adiciono o `done`, assim o expect consegue rodar.

- Provavelmente dará erro porque é necessário setar permissão de edição para o arquivo `main.js` - `chmod +x src/main.js`

- Adiciono o conteúdo do teste no main.js
- Adiciono a diretiva no Node
    - quando rodar tem que entender que é código node
    - sem esse comando o código não vai ser intepretado.

        `#!/usr/bin / env node`

- \n significa o pulo de linha.


# Aula 132 - Conhecendo o Commander

- [CommanderJS](https://github.com/tj/commander.js/) - ajuda a criar uma CLI de forma mais fácil.
    - Vamos usar-lo
    - vou adicionar o `--version` para que ele exiba a versão do btc-converter
    - instalar o commander

            npm install --save commander

    - Adiciono no arquivo de js as configurações do commander

        ```js
        const program = require('commander');
            program
            .version('1.0.0')
            .parse(process.argv)
        ```
    - Ocorre que é necessário vincular o arquivo package.json para que ele pegue também a versão que está la.
    - No arquivo de teste vou adicionar as seguintes configurações:

    ```js
    const pkg = require('../package.json');
     
    expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
    ```

    - No arquivo js vou chamar também, na versão o `pkg.version`


# Aula 133 - Aprendendo a rodar a CLI localmente

- Adicionar uma descrição na CLI
- Fazer a build - `npm run build``
- `npm link` - vai fazer uma linkagem dos comandos da minha pasta com o node




