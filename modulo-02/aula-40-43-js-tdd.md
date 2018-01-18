# Aula 40 -  Introdução a Symbols


* É um tipo primitivo como array, string.
* Crio da seguinte forma: chamo let, o nome (pode ser qualquer um), Symbol e dentro dele uma descrição (descricao)

        let foo = Symbol('name');
        console.log(foo);

    * É imutável, não se modifica
    * é único

          let foo = Symbol('name');
          let bar = Symbol('name');
          
          console.log(foo == bar);
        
        - vai resultar em _false_ porque cada um tem um identificador diferente, são únicos. 

* Posso criar objetos e dentro das chaves serem Symbols para evitar ter objetos com propriedades iguais.


        let obj = {
            [Symbol('name')] : 'William';
            [Symbol('age')] : '26';
            city: 'Dublin'
        }

        console.log(Object.keys(obj));

    - Só vai exibir o _city_, porque ele só considera o city dentro da chave. As outras duas são Symbol

            const symbols = Object.getOwnPropertySymbols(obj);
            const data = symbols.map(sym => obj[sym]);
            console.log(data);

        - Resulta em: {William, 26};



# Aula 41 -  Iterators e Iterables - for...of

* Protocolos novos no javascript que permite iterar sobre uma informação.
* Tenho uma Array e consigo caminhar por cada um dos itens.
  - Iterables - elementos que eu consigo iterar
  - Iterator - elementos que eu consigo fazer para passar de um pro outro.

* Exemplo: Vou criar um iterador que vai passar por dentro do texto iterável.


        var txt = 'Ireland'// iterable
        var it = txt[Symbol.iterator](); iterator

    - Posso fazer um for...of para passar por cada elemento de txt

        for (letter of txt) {
            console.log(letter);
        }

    - para letter do txt quero fazer algo
    - Vai exibir todas as letras separadas, um console pra cada.

    - Consigo parar o loop

        for (letter of txt) {
            console.log(letter);
            if(letter === 'a') break;
        }
    - quando a letra for igual a 'a' ele para.



# Aula 42 e 43 - Introdução a Generators


