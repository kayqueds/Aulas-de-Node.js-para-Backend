/* Parâmetros e Argumentos
//ex10
function login(usuario = "Morador"){
    return usuario
}
console.log(login());
//ex11 rest parameter ... lista que recebe quantos valores que quiser
function somarTudo(...numeros){
    var soma = 0
    for(let numero of numeros){
        soma +=numero
    }
    return soma
}

console.log(`A soma foi: ${somarTudo(10,3,4, 80)}`);

//ex12
function multiplicarTudo(...numeros){
    var total = 1
    for(let numero of numeros){
        total *= numero
    }
    return total
}
console.log(`O total da multiplicação foi: ${multiplicarTudo(2,5,7)}`);

// ex13
function apresentarPessoa(nome, idade, cidade){
    return `Nome: ${nome}, Idade: ${Number(idade)}, Cidade: ${cidade}`
}
console.log(apresentarPessoa("Kayque", 19, "Embu das Artes"));
*/

