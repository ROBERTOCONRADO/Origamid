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
//Verifique se Julia faz parte dos estudantes
console.log(estudantes);