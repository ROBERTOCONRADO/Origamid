const comidas = ['pizza', 'Frango', 'Carnes', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma váriavel

const primeiroValor = comidas.shift();
// remova o último valor de comidas e coloque em uma variavel

const ultimoValor = comidas.pop();
//Adicione "Arroz" ao final da array

comidas.push('Arroz');
//Adicione "Peixe" e "Batata" ao inicio da array

comidas.unshift('Peixe', 'Batata');
console.log(comidas);//<=['Peixe', 'Frango', 'Carnes', 'Arroz']

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Julia', 'Jessica', 'Janainna'];
//Arrume os estudantes em ordem alfabética
estudantes.sort();

//Inverta a ordem dos estudantes 
estudantes.reverse();

//Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));

//Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));
console.log(estudantes);

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`
//Substitua section por ul e div com li, utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html)
/* <ul>
    <li>Sobre</li>
    <li>Produtos</li>
    <li>Contato</li>
</ul> */

const carros = ['Golf', 'Civic', 'Hb20', 'Corsa']
//Remova o último carro, mas antes de remover salve a array original em outra variável
const copiaCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(copiaCarros);
