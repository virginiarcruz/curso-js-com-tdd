# Aula 18 -  Tagged Template Literals

* Conseguimos utilizar uma funcão na frente do texto e fazer modificações em cima dele.
  - Exemplo 
    - nas variáveis da função **green**, chamo além de _template_, todos os argumentos da variável _ireland_ que vou imprimir - **function green(template, ... values)**

        const city = 'Dublin';
        const something = 'Guinness';
        const otherThing = 'Leprechaums';

        function green(template, ... values) {
                debugger
        }

        const ireland = green`I live in ${city} the city of ${something} and ${otherThing}!`;

        document.body.innerHTML = ireland;

  - Para imprimir as variáveis corretamente, iremos utilizar um reduce

        const city = 'Dublin';
        const something = 'Guinness';
        const otherThing = 'Leprechaums';

        function green(template, ... values) {
                return template.reduce((acum, part, i) => {
                return `
                        ${acum}
                        <span class="green">${values[i - 1].toUpperCase()}</span>
                        ${part}
                `
                });
        }

        const ireland = green`I live in ${city} the city of ${something} and ${otherThing}!`;

        document.body.innerHTML = ireland;