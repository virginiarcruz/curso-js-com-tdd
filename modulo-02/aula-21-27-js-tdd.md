# Aula 21 -  Shorthand Properties

* Melhorias pra escrever o código em ES6
  Exemplo:

  - Considerando que vamos utilizar 3 dados

                let firstName = 'Vick';
                let surname = 'Cruz';
                let age = 26;

  - com ES5 seria

                const person = {
                        firstName : firstName,
                        surname : surname,
                        age : age, 

                        hello function () {
                                console.log('Hello');
                        }
                }
  
  - com ES6, o Hello não precisa de function

                const person = {
                        firstName,
                        surname,
                        age,

                         hello() {
                                console.log('Hello');
                        }
                }
        

# Aula 22 - Default Parameters

- No ES5

                function hello(name, surname) {
                        name = name || 'Vick';
                        surname = surname || 'Cruz';

                        console.log('Hello $(name) $(surname)! How are you?')
                }

                hello();
                hello('NomeQualquer', 'OutroNome');
- No ES6

                function hello(name = 'Vick' , surname = 'Cruz') {
                        console.log('Hello $(name) $(surname)! How are you?')
                }

                hello();
                hello('NomeQualquer', 'OutroNome');

  - Ambos irão imprimir a mesma coisa


# Aula 23 - Novos métodos para Strings

* Método **startsWith**
  
  - Exemplo:

                let text = "Lorem ipsum sit amet";

                console.log(text.startsWith('Lorem')); vai imprimir TRUE
                console.log(text.startsWith('ipsum')); vai imprimir FALSE

  - Posso dizer onde quero que ele comece a conta
                
                console.log(text.startsWith('rem', 2)); vai imprimir TRUE

* Método **endsWith**

                console.log(text.startsWith('ame', 25)); vai imprimir TRUE, vou dizer até quanto eu quero que ele conte.

* Método **repeat**

                console.log('lol'.repeat(10)); // vai repetir 'lol' por 10x

* Método **includes**

                console.log(text.includes('lol')); // vai dizer de 'lol' existe ou não FALSE

                console.log(text.includes('sit')); // TRUE


# Aula 24 - Array.from()

* Transforma elementos semelhantes ao Array em Array para que ele possa herdar todos os métodos do Prototype Array

 - Exemplo:

        const text = "William";

        console.log(Array.from(text));

   - Transforma a string em um Array todo separado


  - Exemplo

        <ul id="list">
                <li>Vick</li>
                <li>Cruz</li>
                <li>Rodrigues</li>
        </ul>

        const list = document.querySelectorAll('#list li');
        const listArray = Array.from(list);

        console.log(list); // vai ser Nodelist
        console.log(listArray); // vai ser um Array com todos os métodos do Array


        const names = listArray.map((name) => name.textContent); // pega o texto de dentro dos list

        console.log(names); // vai exibir o conteúdo dos lis

# Aula 25 - Array.of()

* Permite criar um Array através de certos elementos. Posso juntar vários dados e transformar em array de forma rápida e simples.

        const array = Array.of(1,6,'Virginia', 'Rodrigues');
        console.log(array)// vai exibir o array de 4 itens

# Aula 26 - Array.find() e Array.findIndex()

* Servem para procurar um dado e o outro um index dentro do Array.
  - Diferença do .find() para o filter() - busca o primeiro valor que encontra dentro do array o filter  responde true ou false a uma condição. O find para quando encontra a primeira condição correspondente.

  - Exemplo:

        const sampleArray = [4, -5, 0, -1];
        const underZero = sampleArray.find( x => x < 0); 

        console.log(underZero);
    
    - se X (que e cada valor do array) for menos < 0, ele vai mostrar no console. O primeiro valor que encontrar.


  - Com o findIndex() - vai mostrar o índice

        const underZeroIndex = sampleArray.findIndex( x => x < 0); 

  - Posso fazer uma busca por objetos, buscar dados dentro de um objeto por exemplo:

        const data = [
                {
                name: 'Willian',
                age: 26,
                city: 'Dublin'
                },
                {
                name: 'Jonas',
                age: 22,
                city: 'Cologne'
                }
        ];

        const will = data.find(person => person.name === 'Willian');
        console.log(will); 

   - Nesse caso ele vai buscar no Array de objetos data, o objeto com name === Willian, quando encontrar ele exibe o dados inteiros do objeto, ou seja: name,age e city.

   - No caso de desejar saber o índice do objeto buscado só utilizar o findIndex

        const will = data.find(person => person.name === 'Willian');


# Aula 27 - array.fill()

* Serve pra preencher os Arrays dentro do JS

  - Se eu quiser criar um array com todos os dados preenchidos faço conforme abaixo:

        const arr = new Array(50);
        arr.fill('lol');
        console.log(arr)

    - vai preencher os 50 itens do array com 'lol'
  
  - Posso ainda dizer o índice que ele pode começar e terminar a preencher. Por exemplo:

        const arr = new Array(50);
        arr.fill('lol', 3, 6);
        console.log(arr)

    - Vai aparecer o indice 3, 4 e 5 preenchidos e o restante para preencher. Mas o array permanece com o tamanho de 50


 - Se eu já tiver um array e quiser modificar algum item:

        const newArr = [1,2,3,4,5,6];
        newArr.fill('lol', 1, 3);
        console.log(newArr);

  - vai exibir então: [1, 'lol', 'lol', 3, 4, 5,6]



        
 