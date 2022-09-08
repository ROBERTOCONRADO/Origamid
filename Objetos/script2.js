//Utilizando o forEach na array abaixo, some os valores de taxa e os valores de recebimento
const transacoes = [
    {
        descricao: 'Taxa de pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa de mecado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa de banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do cliente',
        valor: 'R$ 49',
    },
];
let taxaTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0, 4) === 'Taxa') 
        taxaTotal += numeroLimpo;
});
console.log(taxaTotal);