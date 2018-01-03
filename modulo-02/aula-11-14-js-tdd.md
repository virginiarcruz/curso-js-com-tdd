# Aula 11 - Introdução ao ES6

* ES6 - mudança de várias regras de como escrever o código em JavaScript
* Links:
  - http://es6-features.org/#Constants
  - http://kangax.github.io/compat-table/es6/
  - https://ponyfoo.com/articles/tagged/es6-in-depth
  - https://nipher.io


# Aula 12 - Escopo no Javascript

* Escopo é muito importante para entender as palavras chaves.
* Iremos usar as variáveis left e const.
* O Escopo no JS é aquele onde por exemplo, se defino uma variável chamada **var** dentro de uma função, ela só pode ser chamada dentro daquela função. Porém, se defino a variável fora do escopo daquela função, posso chamá-la em qualquer lugar também fora dela. 
 - Ou seja, variáveis chamadas **var** são function scoped, que tem o escopo somente dentro de funções ou são globais.


# Aula 13 - Variável let no JS

* Diferenças da variável **let** para **var**
 - só posso ter 1 variável com o mesmo nome dentro do escopo. Mesmo uma sendo let ou var.

        var animal = 'cat';
        let animal = 'cat';
   
   - nesse caso dará erro

 - Então, preciso colocar as variáveis em blocos diferentes:

        var animal = 'cat';
        console.log(animal);
        {
          let animal = 'cat';
          console.log(animal);
        }
        console.log(animal);
 
 - Será impresso: cat, dog, cat
- O **let** é útil quando quero utilizar uma variável que não terá como ser reescrita fora do escopo. O que é ideal para quando utilizamos códigos de terceiros ou códigos grandes.


# Aula 14 - Variável const no JS

- Atribui um valor constante aquela variável. Não consigo reatribuir, ou seja, declarar novamente a variável, no entanto posso modificar as propriedades quanto ela é um objeto.
Por exemplo:

        const secretNumber = 28;
        secretNumber = 30; // não será impresso;

        const will = {
                name: 'Willian',
                age: 53
        };

        will.age = 26;

        console.log(will); // será impresso name: Willian, age: 26


- Para que eu possa 'congelar' o objeto e não seja possível modificar suas propriedades preciso fazer o seguinte:

        const secretNumber = 28;

        const will = {
                name: 'Willian',
                age: 53
        };

        Object.freeze(will);
        will.age = 26;
        console.log(will); // será impresso name: Willian, age: 53

  - mantém a variável atribuida no objeto inicialmente.


# Aula 15 - Temporal Dead Zone

- Quando crio uma variável **var** e chamado antes mesmo de te-la atribuido quando for tentar utilizar vai exbiri undefined, porque a variável não foi definida.

        console.log(cat);
        var cat = 'name';

  - Mensagem: undefined

- Se utilizar, **const** ou **let** ao invés de var ele vai dizer que aquela variável específica que estou chamando (const cat;), cat is not defined.

        console.log(cat);
        var const = 'name';

  - Mensage: cat is not define