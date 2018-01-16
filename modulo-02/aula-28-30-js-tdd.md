# Aula 28 -  Introdução ao Destructuring

* Permite pegar elementos e variáveis de forma mais fácil.

  - Para imprimir dados de um objeto:

        var data = {
          name: 'Willian',
          surname: 'Justen',
          age: 25,
          blog: 'https://willianjusten.com.br',
          social: {
            twitter: '@Willian_Justen',
            facebook: '/willianjusten'
          }
        };

    - da forma antiga se quisesse exibir os dados do Array faria
        
          const name = data.name;
          const surname = data.surname;
          const twitter = data.social.twitter;
          
          console.log(name, surname, twitter);

      - com es6
      
            const {name,surname } = data;
            console.log(name,surname);  
            
            // para pegar identado
            const {facebook, twitter} = data.social;
            console.log(facebook, twitter);

        - Dessa forma estou dizendo que quero por exemplo pegar os dados de name e surname dentro de data. Ou facebook e twitter dentro de data.social. 

  - Se eu quiser mudar o nome da variável

         const { facebook : fb } = data.social;
         console.log(fb);

  - Se eu quiser chamar um valor que ainda não tenho dentro de data.

        const { city = 'Dublin'} = data;
        console.log(city);


# Aula 29 - Destructuring em Array

* Fazendo em Arrays

        const arr = ['Virginia', 'Rodrigues', 25, 'Dublin'];

        const [name, surname, age, city] = arr;

        console.log(name, surname, age, city);

  - Ao invés das {} usar [].
  - No console vai exibir os dados do Array.


# Aula 30 - Fazendo swap de variáveis com destructuring

* Trocar o valor das variáveis sem ter que criar variáveis extras


        let a = 42;
        let b = 21;

        [a, b] = [b, a];

    - a recebe b e b recebe a
