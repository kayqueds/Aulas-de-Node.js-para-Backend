/* exercicios com funções
//ex01
function saudar(nome){
    return `Olá ${nome}`
}

console.log(saudar("Kayque"));

//ex02
function dobrar(numero){
    return numero * 2
}
console.log(`Número dobrado: ${dobrar(6)}`);

//ex03
function ehPar(numero){
    if(numero %2 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(ehPar(6));

//ex04
function media3(n1, n2, n3){
    let media = (n1+n2+n3)/3
    return media
}

function passou(){
    if (media3 > 6){
        return "Passou"
    }
    else{
        return "Reprovado"
    }
}
console.log(`A média foi ${media3(3,6,7).toFixed(2)}`);
console.log(`O aluno está ${passou()}`);
*/
// ex05
function maiorNumero(n1, n2, n3){
    let maior = Math.max(n1, n2, n3);
    return maior
}
console.log(`O maior número foi: ${maiorNumero(3,6,10)}`);