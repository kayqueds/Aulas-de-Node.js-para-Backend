const carrinho = [
    {
        nome: "camisa",
        preco: 90.00
    },
    {
        nome: 'calça',
        preco: 70.99
    }

]



const exemploReduce = carrinho.reduce((acc, item) => acc + item * 0,9, 0)
const exemploMap = carrinho.map(carrinho => carrinho.preco).reduce((acc, item) => acc + item.preco, 0)
console.log(exemploReduce)
console.log(exemploMap)
