const palavras = ["web", "programming", "frontend"];
const usarSeparador = palavras.join("-");
console.log(usarSeparador);

const numeros = [];

const numerosIlimitados = (...novoArray) => {
  numeros.push(...novoArray);
  return numeros;
};
console.log(numerosIlimitados(3, 5, 10, 56));

// 1. Crie um objeto carro com propriedades: marca, modelo e ano. Acesse o valor usando

// bracket donation precisa colocar [''] e as aspas para acessar a propriede
const carro = {
  marca: "Wolkswagen",
  modelo: "Fox",
  ano: 2012,
};
console.log(`Bracket donation: ${carro["ano"]}`);
// dotnotation é só usar o .
console.log(`Dotation: ${carro.ano}`);

// chaves usa o Object.keys(obj)
const aluno = { nome: "Carla", matricula: "2025A", curso: "Sistemas" };
console.log(`Somente as chaves: ${Object.keys(aluno)}`);

// valores usa o Object.values(obj)
const pedido = { numero: 1123, total: 89.9, pago: true };
console.log(Object.values(pedido));

const filme = {
  titulo: "Interestelar",
  ano: 2014,
  diretor: "Christopher Nolan",
};
const chaveValor = Object.entries(filme);

for (const [chave, valor] of chaveValor) {
  console.log(`${chave}: ${valor}`);
}

