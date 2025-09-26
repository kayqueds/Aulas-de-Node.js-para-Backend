const id = 1
const nome = 'kayque'
const preco = 246

// deconstrução
const produto = {id, nome, preco}
const {id: codgoProduto} = produto
console.log(produto)