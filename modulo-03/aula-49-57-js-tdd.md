# Aula 49 - Introdução ao Async/Await


- Atualização do curso para ES6/ES7

- Se eu tenho a seguinte função

    ```js
    function getPosts() {
        return fetch('https://willianjusten.com.br/search.json')
                .then(data => data.json())
                .then(data => data.map(post => {
                    console.log(post.title);
                }));
    }

    getPosts();
    ```

- Para adicionar o async/await
- async - vai garantir que o código seja assincrono e vou utilizar tamb/em outra palavra chave pra poder falar pra ele esperar o retorno da funçao de forma correta.
- await - avisa para o JS que ele espere até que a promisse seja resolvida e retorne a promise para o response

    ```js
    async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(response);
        }
    ```

- Da forma como está será necessário transformar os dados em um json, então

        const data = await response.json();
        console.log(data);

- vou pegar o `data post` e fazer um map pra cada post retornar o `post.title`

    ```js
    async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            
            return data.map(post => {
                console.log(post.title);
            })   
    }
    ```

- Dessa fora com o async/await não vou precisar utilizar direto o encadeamento de `.then`


## Observações do Willian

- async/await funciona obrigatoriamente no protocolo de Promises
- async é uma palavra chave usada no início de uma função
- await é usado para avisar a função para esperar o resultado da Promise
- await só pode ser usado para uma função com async
- async/await já está funcionando em quase todos os Browsers e NodeJS

Vantagens de usar async/await

- O código fica mais simplificado
- Mais fácil de debugar por ter menos callbacks
- A conversão de uma promise para async/await é bem simples
- O código fica com menos encadeamentos



# Aula 50 - Tratando erros em async/await


- Para fazer o tratamento de erro vou colocar todo o método dentro do try e depois vou com o catch pegando o erro.

    ```js
    async function getPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            
            return data.map(post => {
                console.log(post.title);
            });
        }
        catch(err) {
            console.error('Noooooo, we got an error!', err);
        }
    }
    ```




# Aula 51 - Async/Await com Multiplas Promises

- Se eu tiver várias promises, o que aprendemos foi colocar o await antes do fecth, mas nesse caso teriamos que esperar ele fazer de um por um. Mas não quero esperar. 
    ```js
    const willian = await fetch('https://api.github.com/willianjusten');
    const guilouro =  await fetch('https://api.github.com/guilouro');
    ```

- Nesse caso iremos fazer um `Promise.all`, ele vai me dizer que eu vou resolver todas as promises que estiverem dentro dele. Ele aceita array.
Então, depois que resolver os dois ele joga pra dentro de promise

 ```js
    const willian = fetch('https://api.github.com/willianjusten');
    const guilouro =  fetch('https://api.github.com/guilouro');

    const promises = await Promise.all([willian, guilouro])

    console.log(promises);
```

- O response não tá resolvido porque preciso transformar em json.

```js
    const willian = fetch('https://api.github.com/willianjusten').then(r => r.json());
    const guilouro =  fetch('https://api.github.com/guilouro').then(r => r.json());

```

- Mas posso querer que sejam vários usuários. Várias promises.

```js
async function getUsers(users) {
    // pego o users e faço um map do user
    const promises = users.map(user => fetch(`https://api.github.com/users/${user}`).then(r => r.json()));
    const people = await Promise.all(promises);
    console.log(people);
     getUsers(['willianjusten', 'guilouro', 'lhbzr']);

     // posso brincar com o json
      console.log(people.map(p => p.company));
```


# Aula 52 - padStart e padEnd

- Features do ES7

- padStart e padEnd - preenche com um caractere no início ou no final pela quantidade passada.
- Exemplo: Quero colocar 5 letras com 'Hi' na frente da string
    
    ```js
    console.log('', padStart(5, 'Hi'));
    // resultado HiHiH

    console.log('acb', padStart(10, 'Hi'));
    // resultado HiHiHiHabc
    ```

- Digamos que tenho um número e quero preencher todo o restante do número que não tiver vazio quero colocar 0

- padEnd é similar, começa com uma string e completa com o que quero.

# Aula 53 - Exponentiation

- Fazer potencia de números.
    ```js
        // old way
        //console.log(Math.pow(2, 3));
        console.log(2 ** 10);
    ```



# Aula 54 - Array.prototype.includes

- Includes - verifica se um determinado valor está incluso dentro dentro de um array

```js
 const arr = [1, 2, 3];

        // forma antiga para verificar se tinha o 3 no array
        //console.log(arr.indexOf(3) > -1);

        // forma nova
        console.log(arr.includes(3));
        console.log(arr.includes(5));
```

# Aula 55 - Object.entries

- Object.entries - faz a separação de chave e valor. Posso trabalhar em cima do map


```js
const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5,
};

const animalsMap = new Map(Object.entries(animals));

console.log(Object.keys(animals)); // antes era a única propriedade que tinhamos.

console.log(animalsMap.size); // variedade de animais
console.log(animalsMap.has('llama')); // se dentro do animals tem a llama
console.log(animalsMap.has('lion'));
console.log(animalsMap.get('alpaca')); // pegar o valor da chave alpaca
```


# Aula 56 - Object.values

- Vai retornar o valor do objeto.
- No código acima tratado para verificarmos os valores dos animais:

```js
// pegar o valor 1 a 1
console.log(Object.values(animals));

// para somar os valores e obter a quantidade dos animais faz um reduce e soma os valores
console.log("Total of animals:", Object.values(animals).reduce((a, b) => a + b));
```



# Aula 57 - Trailing Commas


- antigamente se colocava uma virgula após os numeros dos arrays para que se fosse adicionado um novo item, o dev não esquecer de colocar a virgula anteriormente e não quebrar a aplicação.
- Atualmente é possível colocar a virgula também nas funcitions como está no código abaixo `function sum (a, b,)`. 


```js
const arr = [
    1,
    2,
    3,
    3,
];

const obj = {
    name: 'willian',
    age: 28,
    country: 'Brasil',
}

function sum (a, b,) {
    return a + b;
}
```




 
