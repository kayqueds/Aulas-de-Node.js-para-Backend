/* Desafio
// d1
const frase = "O rato roeu a roupa do rei de Roma".split('')

// invertendo com o reduce
const texto = frase.reduce((acc, t) => t+acc, '')
console.log(texto)


const inverterTexto = () =>{
    frase.reverse()
    return frase.join('')
}

console.log(inverterTexto());
*/
//d2
const produtos = [ 
  { nome: "Mouse", preco: 80, categoria: "periférico" }, 
  { nome: "Teclado", preco: 120, categoria: "periférico" }, 
  { nome: "Notebook", preco: 3500, categoria: "computador" }, 
  { nome: "Cadeira Gamer", preco: 900, categoria: "móvel" }, 
  { nome: "Monitor", preco: 1200, categoria: "periférico" } 
];
// fazendo um filtro d o meu array
const filtragem = produtos.filter(prod=> prod.categoria == "periférico" && prod.preco > 100);
console.log(filtragem);