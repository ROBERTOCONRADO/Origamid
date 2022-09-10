// Crie uma função que verifique corretamente o tipo de dado
function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
} 
console.log(verificarDado('string'));

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: false,
    }
});
console.log(quadrado.lados); //<== {lados: 4}

// Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}
Object.freeze(configuracao);

// Liste o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype)); 
// (50) ['length', 'constructor', 'anchor', 'at', 'big', 'blink', 'bold', 'charAt', 'charCodeAt', 'codePointAt', 'concat', 'endsWith', 'fontcolor', 'fontsize', 'fixed', 'includes', 'indexOf', 'italics', 'lastIndexOf', 'link', 'localeCompare', 'match', 'matchAll', 'normalize', 'padEnd', 'padStart', 'repeat', 'replace', 'replaceAll', 'search', 'slice', 'small', 'split', 'strike', 'sub', 'substr', 'substring', 'sup', 'startsWith', 'toString', 'trim', 'trimStart', 'trimLeft', 'trimEnd', 'trimRight', 'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'valueOf']

console.log(Object.getOwnPropertyNames(Array.prototype));  
// (36) ['length', 'constructor', 'at', 'concat', 'copyWithin', 'fill', 'find', 'findIndex', 'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'unshift', 'slice', 'sort', 'splice', 'includes', 'indexOf', 'join', 'keys', 'entries', 'values', 'forEach', 'filter', 'flat', 'flatMap', 'map', 'every', 'some', 'reduce', 'reduceRight', 'toLocaleString', 'toString', 'findLast', 'findLastIndex']

//Para usar principalmente em biblioteca de terceiros quando não obtiver uma boa documentação. (Melhorar o desenvolbvimento!)