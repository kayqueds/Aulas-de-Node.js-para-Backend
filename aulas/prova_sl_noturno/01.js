

const objeto = [
    {
        pedido: [
            {nome: 'bola', preco: 100},
            {nome: 'tenis', preco: 550},
            {nome: 'calça', preco: 245},
        ]
    },
    {
        pedido: [
            {nome: 'teclado', preco: 150},
            {nome: 'mouse', preco: 50},
        ]
    },
    {
        pedido: [
            {nome: 'geladeira', preco: 350}
        ]
    }
]

//const total = objeto.map(x => x.pedido.filter(item => item.preco > 100).reduce((acc, item) => acc + item.preco, 0))

// FlatMap é usado quando o código é aninhado


const toal = objeto.flatMap(pedido => pedido.pedido.filter
(item => item.preco > 100).map(itens => itens.nome).reduce((acc, item) => acc + item), 0)
console.log(toal)


//console.log(total)