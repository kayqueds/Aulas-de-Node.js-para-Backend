const carrinho  = [
    {name: 'camisa', price: 50},
    {name: 'calça', price: 150},
    {name: 'boné', price: 30},
    {name: 'tenis', price: 200}
]
// adicionar 10% de imposto a cada produto

const produtosComDesconto = carrinho.map(item => ({...item, priceComImposto: item.price * 1.1}))

console.log(produtosComDesconto);


// soma do total dos preços com imposto

const totalComImposto = produtosComDesconto.reduce((acc, price) => acc + price, 0);
console.log(`Total com impostos: R$ ${totalComImposto}`);


// aqui estou filtrando os produtos que custam mais de 100 reais

const maiorQueCEM = carrinho.filter(item => item.price > 100);
console.log("Produtos maiores que 100: ", maiorQueCEM);


/*
const total = carrinho.reduce((acc, item) => acc + item.price, 0)
console.log(total);
*/


// menores que 100

const menorCem = carrinho.filter(produto => produto.price < 100)
console.log(`Produtos menores que 100: `, menorCem)
