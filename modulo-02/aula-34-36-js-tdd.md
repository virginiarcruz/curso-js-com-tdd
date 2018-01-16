# Aula 34 -  Introdução a Promises

* É um objeto com uma ação que ainda não foi finalizada, mas que no futuro será finalizada de alguma forma.
    - É uma promessa, eu ainda não fiz mas vou fazer alguma coisa.

* Trabalhar com coisas assincronas

* Exemplo:

      var defer = new Promise((resolve, reject) => { 
        if(true) {
            resolve('Hello! It works!');
        } else {
            reject('Error!');
        }
      });

    - resolve - método que vai resolver a ação
    - reject - vai rejeitar a ação
    
            defer
                .then( (data) => console.log(data))
                .catch( (err) => console.log(err));

    - then - quando finalizar, faça alguma coisa
    - catch - quando eu quiser tratar um erro

    - Se for true exibe a frase do resolve, se for false ele cai direto no erro e exibe a mensagem do catch

* A promise é interessante para coisas assincronas, então:

        var defer = new Promise((resolve, reject) => { 
                setTimeout( () => {
                    if(true) {
                        resolve('Hello! It works!');
                    } else {
                        reject('Error!');
                    }
                }, 2000);
                
        });


* posso encadear o then:

        defer
            .then( (data) => {
                console.log(data);
                return foo;
            })
            .then( (data) => console.log(data))
            .catch( (err) => console.log(err));




# Aula 35 - Exemplo Real de Promises

* Status da promise
    - pending - tem algo pendente.
    - resolved - conseguiu resolver a requisição
    - rejected - não conseguiu resolver

* No exemplo abaixo de não colocar o setTimeout vai resultar em 'pending', adicionando o setTimeout resulta em 'resolved'
  - fetch é igual ao $.ajax, mas o fetch trabalha em cima do protcolo de promise

        var posts = fetch('https://willianjusten.com.br/search.json');

        setTimeout (()=> {
            console.log(posts);
        }, 3000);

* No exemplo abaixo vou usar o 'then', ou seja, 'pegue estes post e faça alguma coisa'

        posts
          .then( data => data.json())
          .then( data => data.map(post => {
            console.log(post.title);
        }));

    - Vai retornar todos os títulos dos posts


# Aula 36 - Manipulando múltiplas Promises

* Dois métodos estáticos da Promises

 - Método all

      const currency = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ currency: 'euro', value: 3.50 });
        }, 5000);
      });

      const countries = new Promise((resolve, reject) => {
        resolve(['Ireland', 'England', 'Scotland']);
      });

      Promise
        .all([currency, countries]) ele vai poder executar alguma outra ação.
        .then( responses => {
            console.log(responses);
        })

    - quando todas as promises forentem resolvidas 
    - responde o objeto da primeira promise e depois o da segunda.

* Método Race - parecido com o all, também recebe uma lista com todas as promisses, só que no momento que a primeira for resolvida, descarta todo o resto

      Promise
        .race([currency, countries]) 
        .then( responses => {
            console.log(responses);
        })

    - Como 'countries' não tem tempo nenhum, ele vai ser resolvido na hora então o primeiro não vai acontecer;
    - Resulta o array de countries.