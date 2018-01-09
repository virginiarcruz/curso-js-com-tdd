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

