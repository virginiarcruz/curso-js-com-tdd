# Aula 31 -  Introdução ao Spread Operator

* Serve pra pegar elementos que são iteráveis (array, string) e quebrar ele em pequenas partes. Por exemplo, são esses "..." e posso utilizar pra desmembrar qualquer elemento que seja iterável

        let front = ['react', 'vue', 'angular'];
        let back = [ 'python', 'ruby', 'nodejs'];

        console.log([...'will']); // imprime ['w', 'i', 'l', 'l'];
        console.log(...front); // imprime react vue angular

    - Os ... que transformam os elementos.

* Se eu quiser juntar os array e ainda adicionar um elemento entre eles, faço o seguinte:

      let front = ['react', 'vue', 'angular'];
      let back = [ 'python', 'ruby', 'nodejs'];

      let fullStack = [...front, 'RxJS', ...back];

      console.log(fullStack);


# Aula 32 - Usando o spread dentro de funções

* Exemplo

        function makeSandwich(bread, cheese, sauce) {
            console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
        }

        const ingredients = ['white', 'cheedar', 'barbecue']'aula-11-15-js-tdd.md

        markeSandwich(...ingredients);


# Aula 33 - Rest params

* É similar ao Spread Operator;
* É útil para quando eu não tenho certeza de quantos argumento tem aquela função
* Se por exemplo quero multipliar um número seguido por outros números em um array (multiplicador, arg1, arg2, arg3 ...)


    - com es5

          function multiply(mult, arg1, arg2, arg3) {
            let arr = [];
            arr.push(mult * arg1);
            arr.push(mult * arg2);
            arr.push(mult * arg3);
            return arr;
          }

          console.log(multiply(2,1,2,3)); // [2,4,6]

    - com es6 - quantos argumentos eu quiser

          function multiply(mult, ...args) {  
             return args.map(arg => arg * mult);
          }  

          console.log(multiply(2, 1, 2, 3, 4, 5, 6)); // [2,4,6,8.10,12]

        
