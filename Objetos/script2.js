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
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo;
    }else{
        recebimentoTotal += numeroLimpo;
    }
});
console.log(taxaTotal);
console.log(recebimentoTotal);

//Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

//Substitua todos os span´s por a´s
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;
html = html.split('span').join('a');
console.log(html);
/*
<ul>
    <li><a>Sobre</a></li>
    <li><a>Produtos</a></li>
    <li><a>Contato</a></li>
</ul>
*/ 

//Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[--frase.length]);//<== "!"

//Retornr o total de itens "taxas"
const transacoes2 = ['Taxa de banco', '    TAXA de pão', '  taxa de mercado', 'Depósito bamcário', 'TARIFA especial     '];
let totalTaxas = 0;
transacoes2.forEach((item) => {
    item = item.trim().toLowerCase().slice(0,4);
    if(item === 'taxa')
        totalTaxas++;
    })
    console.log(totalTaxas);//<== "3"
