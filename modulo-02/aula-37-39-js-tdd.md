# Aula 37 -  Herança Prototipal

* Como se dá a herança prototipal
* Exemplo


       function Animal (kind, sound) {
           this.kind = kind;
           this.sound = sound;
       }
       
    - Crio a const para atribuir os dados a função construtora.

        const dog =  new Animal ('dog', 'auau');
        const cat =  new Animal ('cat', 'meau');

    - Vai resultar com em um objeto
      - Animal { kind: 'dog', sound: 'auau'};

    - Animal posso criar uma função dentro do prototype

        Animal.prototype.hello = function () {
            console.log(' ${this.sound} I'm a ${this.kind}!');
        }
    - function seria a **class**
    - dentro da function **constructor**
    - prototype **method**


# Aula 38 -  Criando classes no ES6

* Pra definir uma classe

      class Animal {
          constructor(kind, sound) {
            this.kind = kind;
            this.sound = sound;
          }

          hello() {
              console.log(`${this.sound} I'm a ${this.kind}!`);
          }

          //métodos estáticos
          static info() {
              console.log(`This is a class to create animals`);
          }

          // metodos set e get
          get name() {
              console.log(`${this.sound} My name is Jake!`);
          }

          set nickname(nick) {
              this.nick = nick;
          }


      }

      const dog =  new Animal ('dog', 'auau');
      const cat =  new Animal ('cat', 'meau');

 - Para utilizar posso fazer
    - dog.hello; Chamo como uma propriedade
    - Animal.info - se chamar dog.info() não vai funcionar porque ele é estático.
    - dog.name;
    - no set para atribuir valor faço
      - dog.nickname = 'J';
      - para utilizar faço dog.nick;


# Aula 39 - Usando extended classes

* Posso ter uma classe que extende de uma primeira
* Exemplo:


        class Animal {
            constructor(name) {
                this.name = name;
            }
            hello() {
                console.log(`I'm ${this.name}!`);
            }
        }

        class Dog extends Animal {
            construtctor(sound) {
                this.sound = sound;
            }

            bark(){
                console.log(`${this.sound} I'm ${this.name}`)
                console.log(`${this.sound} I'm ${this.name}`)
            }
        }
        
        const elephant = new Animal('Dumbo');
        const dog = new Dog('Jake', 'auau');

    - elephant =  Animal {name: 'Dumbo'}
    - todas as coisas que tenho em Animal, vou ter em Dog

    - Para este caso vai dar um erro de **this is not defined**.  No construtor this.sound. Como estou extendendo tenho que chamar primeiro as coisas de Animal que é quem estou extendendo.

            class Animal {
                constructor(name) {
                    this.name = name;
                }
                hello() {
                    console.log(`I'm ${this.name}!`);
                }
            }

            class Dog extends Animal {
                construtctor(sound) {
                    super(name);
                    this.sound = sound;
                }

                bark(){
                    console.log(`${this.sound} I'm ${this.name}`)
                }
            }
            
            const elephant = new Animal('Dumbo');
            const dog = new Dog('Jake', 'auau');

    - Se chamar dog.hello() = I'm Jake!
    - dog.name = "Jake"
