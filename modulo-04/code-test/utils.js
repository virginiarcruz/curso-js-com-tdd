function sum(a, b) {
    return a + b;
}

// método principal
// só pode ter um default por arquivo, pode ser qualquer nome e não precisa utilizar as chaves

export default sum;
// importar no arquivo app.js

//named export
// posso fazer assim direto
export function sub(a, b) {
    return a - b;
}


// e posso fazer separado
function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const PI = 3.14;

export { mult as multiplicacao, div, PI };
