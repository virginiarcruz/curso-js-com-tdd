# Aula 44 - Introdução ao Proxy

* é uma forma de você definir comportamentos diferentes para métodos dentro de um objeto.

* Exemplo, a sintaxe do proxy é:

    var p = new Proxy(target, handle);

    let obj = {
        name: 'Willian',
        age: 26
    };

    let proxy = new Proxy(obj, {
        get (target, name) {
            console.log('Alguém está pedindo o nome');
        }
    });

- target é o objeto e o handler é dentro dele que vou colocar os métodos que quero diferenciar.

    let proxy = new Proxy(obj, {
        get (target, name) {
            console.log('Alguém está pedindo o nome');
            return target[name];
        }
    });

- se fizer: proxy.name o resultado vai ser
    Alguém está pedindo o nome
    'Willian'


        let proxy = new Proxy(obj, {
            get (target, name) {
                console.log('Alguém está pedindo o nome');
                return target[name];
            },

            set (target, name, value) {
                console.log('Alguém está mudando o nome');
                target[name] = value;
            }
         });

    - proxy.name = 'Jonas';
      - Alguém está mudando o nome
        'Jonas'

    - E o nome será modificado para Jonas

# Aula 45 - Introdução ao Set

* É um elemento que te permite guardar valores únicos de um tipo, primitivo ou um objeto

* Exemplo:

        let mySet = new Set(['wlillian', 'jonas', 'vick']);

* Se eu quiser saber o tamanho, ao invés de length, uso size

        mySet.size
        3

## Métodos do Set

  * Add - se eu quiser adicionar mais um:

        mySet.add('marcio');

    - Se eu colocar um mesmo nome várias vezes ele só vai adicionar uma vez
  
  * Para deletar

        mySet.delete('vick');

  * Posso usar o has pra saber se existe um elemento

        mySet.has('willian'); // true
        mySet.has('denis'); // false

  * Set não é baseado em índice como o array
  * É baseado no iterator
    - Exemplo:

        lef it = mySet.values();

    - posso chamar no console:

        - it - vai exibir todos os itens do set
        - it.next() - exibe o primeiro, e se fizer novamente it.nxt() vai exibir os próximos até que venha o valor de undefined que é quando não exitem mais itens no set.

    - Consigo usar o for...of - então pra cada name de it, mande um console.log de name. Vai exibir todos os names.

            for (name of it) {
                console.log(name);
            }


# Aula 46 - Introdução ao WeakSet

* É similar ao set, com algumas diferenças
* Exemplo:

        let obj1 = {
            name: 'Willian',
            age: 26
        };

        let obj2 = {
            name: 'Jonas',
            age: 22
        };

    - Só aceita objetos como parâmetros

          let ws = WeakSet([obj1, obj2]);
    
    - chamando o _ws_ no console vai exibir o WeakSet com os dois objetos

            ws.has(obj1);
            ws.add({type: 'objt'});
            ws.delete(obj2);

    - Não é possível fazer clear, values ou for...of
    - Não permite iteração.


# Aula 47 - Introdução ao Map

* É parecido com o objeto, onde definimos chave e valor
* Exemplo:

      let m = new Map();

    - Pra definir um novo item do Map

      m.set("Willian", 26);
      m.set("Jonas", 22);
      m.set("Vick", 35);
    
    - Se chamar m vai exibir todos os elementos do Map
      
      m.size - vai ser 3
      m.delete('Vick');
      m.values() - vai ser MapIterator(26,22);

    - Posso criar um const

      const it = m.values();
      it.next() - vai mostrar o próximo e o próximo





        
    









