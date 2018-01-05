# Aula 16 - Introdução a Arrow Function

* Observar o código com uma função normal:

        const ireland = ['Dublin', 'Galway', 'Cork'];

        const love = ireland.map(function(name) {
                return 'I love ${name}!';
        });

        console.log(love);

* Transformando em Arrow Function

        const ireland = ['Dublin', 'Galway', 'Cork'];

        const loveArrow = ireland.map((name) => {
                return 'I love ${name}!';
        });

        console.log(loveArrow);

  - Se for só uma variável não preciso usar os parêntes no name

        const loveArrowSingle = ireland.map(name => {
                return 'I love ${name}!';
        });

  - Se for só uma linha só não preciso usar as chaves e nem a palavra return

        const loveArrowOneLine = ireland.map(name => 'I love ${name}!'; );

  - Quando faço uma concatenação de métodos fica mais fácil a leitura.
  - No exemplo abaixo vai imprimir I Love Dublin se o name for igual a Dublin

        const loveArrowOneLine = ireland
                        .filter(name => name === 'Dublin');
                        .map(name => 'I love ${name}!'; );


# Aula 16 - Arrow Function e o Lexical This

* This no Arrow Function - objeto no qual estamos interagindo naquele contexto. O contexto será o todo daquele contexto que ele está, ao invés do objeto setado.

- Com uma função normal o this precisa ser setado dentro do bloco da funcão.

        const sandwich = {
                bread: 'white',
                cheese: 'cheddar',

                prepare: function() {
                        return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese!`;
                },

                make: function() {
                        var that = this;
                        window.setTimeout(function() => {
                                console.log( that.prepare() );
                        }, 500);
                }
        };
        
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function() { sandwich.make() });

  - Com o Arrow Function, o this é todo o contexto do que estamos trabalhando, que no caso é o contexto de sandwich.

        const sandwich = {
                bread: 'white',
                cheese: 'cheddar',
                
                prepare: function() {
                        return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese!`;
                },

                make: function() {
                        window.setTimeout(() => {
                                console.log( this.prepare() );
                        }, 500);
                }
        };
    
        const btn = document.getElementById('btn');
        btn.addEventListener('click', function() { sandwich.make() });

* Tomar cuidado porque nem todo contexto cabe Arrow Function.