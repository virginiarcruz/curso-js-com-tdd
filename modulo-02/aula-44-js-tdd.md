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









