/*
const diasSemana = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

const diasS = diasSemana.filter((dia) => dia[0] == "s");
console.log(diasS);

const numeros = [];
for (let num = 1; num <= 8; num++) {
  const numeroAleatorio = numeros.push(
    Math.round(Math.random() * 100)
  );
}
const dobro = numeros.map((numero) => numero * 2);
console.log(dobro)

const somarTudo = dobro.reduce((acc, numeroAtual) => acc+numeroAtual,0)
console.log(`A soma total do array foi: ${somarTudo}`)

// exemplo com o find
const nomes = ["Ana", "Fernanda", "Luiz", "Gabriela", "João"];
const maiorQue6 = nomes.find(nome => nome.length > 6)
console.log(maiorQue6)


const notas = [7.5, 8.0, 9.0, 6.5, 5.0];
const todasMaiores5 = notas.every(nota => nota > 7)
if (todasMaiores5 == false){
    const notasMenores = notas.filter(nota => nota <7)
    console.log(`Tem notas menores que 7: ${notasMenores}`)
}
else{
    console.log(`Todas as notas são maiores que 7: ${todasMaiores5}`)
}

const verificar10 = notas.some(nota => nota == 10)
//console.log(verificar10)
if (verificar10){
    console.log('Tem notas com 10')
}
else{
    console.log('Não têm')
}
  
const cidades = ["Campinas", "Curitiba", "São Paulo", "Santos"];

const temSaoPaulo = cidades.includes('São Paulo');
console.log(temSaoPaulo)

// pegar os 3 primeiros numeros
const numeros = [10,20,30,40,50];
const tresPrimeiros = numeros.slice(0,3)
console.log(tresPrimeiros)
  */

// usando o splice para remover e adicionar no lugar
const frutas = ["maçã", "banana", "uva", "abacaxi", "melancia"];
console.log("Array antes:", frutas);
const remover2 = frutas.splice(0, 1, "manga", "pera");
console.log('Array depois:', frutas);