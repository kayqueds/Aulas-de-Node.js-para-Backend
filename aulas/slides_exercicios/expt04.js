
/* arrow function 🏹
//ex14
const quadrado = q => q ** 2;
console.log(quadrado(5));

//ex15
const saudacaoCurta = msg=> {
    return `Oi ${msg}`
}
console.log(saudacaoCurta("Marina"));

//ex16
const media3 = (n1, n2, n3) => {
    return (n1, n2, n3)/3
}
const passou = ()=>{
    return media3 > 6 ? "passou" : "reprovou" 
}
console.log(`A média foi ${media3(3,6,7).toFixed(2)}`);
console.log(`O aluno ${passou()}`);

//ex17
const maiorNumero = (n1, n2, n3) => Math.max(n1, n2, n3);
console.log(maiorNumero(4,5,1));


// Arrow Functions com Arrays
//ex18
const numeros = [1, 2, 3, 4, 5];
const triploNumero = numeros.map(numero=> numero*3);
console.log(numeros)
console.log(triploNumero)

//ex019
const frutas = ["maçã", "uva", "banana"];
const tudoEmMaiusculo = frutas.map(fruta=> fruta.toUpperCase())
console.log(frutas);
console.log(tudoEmMaiusculo);

const numeros = [10, 3, 25, 8, 15, 2];
const maiorQueDez = numeros.filter(numero=> numero > 10);
console.log(numeros)
console.log(`Números maiores que 10: ${maiorQueDez}`);
*/
const nomes = ["Ana", "Pedro", "João", "Carolina", "Lu"];
const maiorQuatro = nomes.filter(nome => nome.length > 4);
console.log(nomes);
console.log("------------------------------------------");
console.log(`Nomes maiores que 4 letras: ${maiorQuatro}`);