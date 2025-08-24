// tipos primitivos
// string
/*
let nome = 'João';
// number
let idade = 20;
// boolean
let isEstudante = true;
*/

let numero = 1 + "2";

console.log(typeof(numero))
// ARRAY
let frutas = ["", "maçã", "laranja"]
frutas.push('bananas')
console.log(frutas);
let pessoa = {
    nome: "Kayque",
    idade: 19,
    sexo: "Masculino "
}
// operadores
// () é chamado primeiro
let numeros = 2*(2*4)
console.log(`O resultado é: ${numeros}`)

// Objetos

let cachorro = {
    nome: "Rex",
    idade: 5,
    raca: "Labrador",
}

//console.log(`O cachorro se chama ${cachorro.nome}, tem ${cachorro.idade} anos e é da raça ${cachorro.raca}.`);



let pessoas = [
    {
        nome: "André",
        idade: 30,
        profissao: "Engenheiro"
    },
    {
        nome: "Julia",
        idade: 25,
        profissao: "Designer"
    }
]

for (pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`);
}