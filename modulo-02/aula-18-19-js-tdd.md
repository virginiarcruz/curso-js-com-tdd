# Aula 18 -  Introdução a Template Literals

* Template Literal - permite que crie string de forma mais fácil.

  - Exemplo, para imprimir concatenando strings:

        const ireland = {
                live: 'Dublin',
                love: 'Galway'
        };

        const text = 'Eu moro em ' + ireland.live + ' e sou apaixonado por ' + ireland.love+'!';

        console.log(const);

  - Com o Template Literal é bem mais simples

        const newText = 'Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!';

  - Outro exemplo utilizando quebra de linha para imprimir strings

        const fruits = 'bannana' 
                + `\n`
                + 'orange'
                + `\n`
                + 'apple';
        
    - Com template literal
        
          const newFruits = 
                `banana
                orange
                apple`;
        
          console.log(newFruits);


# Aula 19 -  Usando Template Literals para Html Fragments

* Criar um fragmento de html. Exemplo:

        const article = {
                title: 'Aprendendo Template Strings',
                intro: 'Uma breve explicação de como se utilizar template               strings do ES6 em seu código hoje!',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.        Molestias, officia, perspiciatis? Architecto, molestias          autem. Repellat, laborum deserunt soluta necessitatibus.         Tenetur illo, id magnam numquam neque illum temporibus,          in qui eos.',
                tags: ['es6', 'js', 'template-literal']
        };

        const markup = `
                <article>
                        <header>
                        <h1> ${article.title} </h1>
                        </header>
                        <section>
                        <p> ${article.intro} </p>
                        </section>
                        <footer>
                                <ul>
                                ${article.tags.map((tag)=> `<li>${tag}</li>`).join('')}
                                </ul>
                        </footer>
                </article>
        `;

        document.body.innerHTML = markup;

  - Consigo fazer um markup inteiro utilizando o Template Literal

  - Para adicionar um autor ao texto:

        const article = {
                title: 'Aprendendo Template Strings',
                intro: 'Uma breve explicação de como se utilizar template               strings do ES6 em seu código hoje!',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.        Molestias, officia, perspiciatis? Architecto, molestias          autem. Repellat, laborum deserunt soluta necessitatibus.         Tenetur illo, id magnam numquam neque illum temporibus,          in qui eos.',
                tags: ['es6', 'js', 'template-literal'],
                author : 'Virginia Rodrigues'
        };

        function renderAuthor(name) {
                return (name) ? (name) : 'unknow';
        }

        const markup = `
                <article>
                  <header>
                    <h1> ${article.title} </h1>
                  </header>
                  <section>
                        <p> ${article.intro} </p>
                  </section>
                  <footer>
                        <ul>
                        ${article.tags.map((tag)=> `<li>${tag}</li>`).join('')}
                        </ul>
                        <p> Author: ${renderAuthor(article.author)}</p>
                  </footer>
                </article>
        `;

        document.body.innerHTML = markup;