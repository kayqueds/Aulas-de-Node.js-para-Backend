// 2 arrays
// ... une listas
let frutas = ['maça', 'banana']
let frutas2 = ['abacaxi', 'kiwi', 'manga']
const quantidade = frutas.length


for (let i =0; i < frutas2.length; i++){
    frutas=[...frutas, frutas2[i]]
}

console.log(frutas)


