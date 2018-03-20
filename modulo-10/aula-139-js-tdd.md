# Aula 139 - Refatorando testes assíncronos com async/await

- retirar o setTimeout e adicionar o `async & await`
- vou precisar instalar o babel-polyfill

        npm install --save-dev babel-polyfill

- no package.json adicionar o require

            "test": "./node_modules/.bin/mocha tests/**/*.spec.js --require babel-register --require babel-polyfill",

- restirar o reporter nyan

- No arquivo de JS
    - a lib de request não trabalha com promisses, então será necessário fazer algumas modificações

        npm install --save request-promisse-native

    - No código:
        - o request vai ser encapsulado dentro de um .then, porque é uma promise
        - vou retirar o try/catch

        ```js
        return request(url)
            .then((body) => {
                spinner.stop();
                return body;
            })
            .then((body) => {
                const apiResponse = JSON.parse(body);
                console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
            })
            .catch((err) => {
                spinner.stop();
                console.info(chalk.red('Something went wrong'));
                return err;
            });
        ```

- no teste, retirar o done e o setTimeout e adicionar o async()/await
    ```js
    it('should ruse currency USD and 10 as amount', async() => {
    [...]
        await convertBTC('USD', 10);
    });
    ```

- ao invés de `console.log`, utilizar o `console.info`