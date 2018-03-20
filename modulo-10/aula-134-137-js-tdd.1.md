# Aula 134 - Definindo Options como parâmetros

- Fazer a conversão do Bitcoin - precisamos de uma api que faça a conversão.
- Criar os arquivos de teste e js

- No primeiro teste vou fazer uma verificação que quando eu chame o método ele me retorne o USD e 1 como default

```js
describe('ConvertBTC', () => {
  it('should return USD as currency and 1 as amount default', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
  });
});

// no js
function convertBTC() {
  return '1 BTC to USD = 2000.00';
}
module.exports = convertBTC;
```

- Da forma acima o código não está dinâmico, então vamos editar o código para que carregue os dados de forma dinâmica.

    ```js
    function convertBTC(currency = 'USD', amount = 1) {
    return `${amount} BTC to ${currency} = 2000.00`;
    }

    module.exports = convertBTC;
    ```

- Preciso conseguir passar os parâmetros no main que eu consiga passar as opções de currency e amount
    - no teste vou dizer que quero que inclua `currency` dentro do help

    ```js
      it('should return currency option when btc-converter --help', (done) => {
            exec(`${btcConverter} --help`, (err, stdout, stderr) => {
            if(err) throw err;
            expect(stdout.includes('--currency')).to.be.true;
            done();
            });
    });

    // no main
      .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
    ```

    - faço a mesma coisa para o amount
    - no `convertBTC` já posso chamar as configurações feitas.

          convertBTC(program.currency, program.amount);

    - npm run buil e npm link para incluir os novos comandos
    - Se rodar o commando btc-converter --help já terão os comandos que cruamos de currency e amount


# Aula 135 - Utilizando a API para obter dados reais

- Utlizando a api do [Bitcoin Average](https://apiv2.bitcoinaverage.com/#conversion-price-converter-get)

- Vamos utilizar ainda 2 bibliotecas
    - request
    - nock - conseguir criar mocks das chamadas http

- Instalar todas as bibliotecas

      npm install --save-dev nock sinon sinon-chai
      npm install --save request


## Fazendo os testes

- Chamar, no arquivo de testes as dependências.
    - nock, sinon, sinon-chai e dentro do chai usar o sinin chai

- Criar as chamadas de testes que de fato irão utlizar os dados da API
    - vou utilizar o [nock](https://github.com/node-nock/nock), seguindo o exemplo de uso da documentação:
        
            nock('http://example.com')
                .get('/users')
                .query({name: 'pedro', surname: 'teixeira'})
                .reply(200, {results: [{id: 'pgte'}]});
    
    - para adicionar os dados da [api](https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1)

    - `from=BTC&to=USD&amount=1` - objeto dentro de query
    - `convert/global` - é o get
    - `https://apiv2.bitcoinaverage.com` - url

- No teste adicionar as configurações da api para que os dados sejam exibidos
- Dessa forma, teremos:

```js
  it('should ruse currency USD and 1 amount default', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('convert/global')
      .query({from: 'BTC', to: 'USD', amount: 1})
      .reply(200, responseMock) // 200 é sucesso
    convertBTC(); 

    // quando chamar esse método acima eu espero que
    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 HTC to USD = 8197.32');
      done();
    }, 300)
  });
```

- Para trabalhar com as requisiçoes assicronas vou precisar criar um setTimeOut para o nock, e colocar o expect dentro dele, e o `done` depois para dizer que terminou.


- No arquivo de js vou fazer o seguinte:
    - crio o require
    
    ```js
    function convertBTC(currency = 'USD', amount = 1) {
        const url = 'https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1';

        // pra funcionar o request eu chamo a url com 3 parâmetros dentro dele.
        request(url, (error, response, body) => {
            let apiResponse = JSON.parse(body);
            console.log(`1 BTC to USD = ${apiResponse.price}`);
        });
    }
    ```

- Para fazer o teste com qualquer valor para o USD é necessário fazer outra verificação no JS, ao invés da url ser estática vou passar os parâmetros:
    - na url adiciono o `currency` e `amount`

          const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;
    
    - no console faço a mesma verificação

          console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);




# Aula 136 - Tratamento de erros

- Fazer mais uma verificação quando é passar só 1 parâmetro, feito no: `should ruse currency BRL and 1 as amount default``

- Quando houver algum erro, também é importante fazer a verificação.
    - É feita com o `try/catch` e no arquivo de teste é exibida a mensagem de erro quando algo não funcionar.


# Aula 137 - Colorindo o terminal com Chalk

- Usaremos a biblioteca chamada [Chalck](https://github.com/chalk/chalk)
- Chama no arquivo de JS e de teste o chalk
- Adiciona os parâmetros para a mudança de cor

```js
//no arquivo de teste:
expect(consoleStub).to.have.been.calledWith(chalk.red('Something went wrong')); // para o erro

expect(consoleStub).to.have.been.calledWith(`${chalk.red(10)} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(8465.93)}`);
// para os demais
```

- faço a build e o link

      npm run build && npm link


- se rodar o `btc-converter` ele já vai rodar com as cores modificadas.

# Aula 138 - adicionando um Loader

- Será utilizado o [oraJS](https://github.com/sindresorhus/ora)
- Instalar o ora

        npm install --save ora

- Faz os requests e criar o spinner

    ```js
    const spinner = ora({
        text: 'Retrieving Bitcoin data...',
        color: 'yellow',
    })

    //antes do request
     spinner.start();
    
    // depois do requeest
     spinner.stop();
    ```

- faço a build e o link

      npm run build && npm link

- quando rodar ele vai aparecer o loader



