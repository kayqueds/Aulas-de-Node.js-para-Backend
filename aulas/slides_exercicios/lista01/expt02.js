/* Expressão de Função
// ex06
function tudoEmMaiusculo(palavra){
    return palavra.toUpperCase()
}
console.log(tudoEmMaiusculo("marina"));

//ex07
function calcularAreaRetangulo(base, altura){
    let area = base * altura
    return area
}
console.log(`🔺 A área do triângulo foi: ${calcularAreaRetangulo(3,4)}`);
/* 
    ex08
    ela vai dar erro pois não pode ser acessada antes de ser iniciada
    hoist = içamento leitura do interpretador js

console.log(exemplo());

const exemplo = function(){
    return `Exemplo de erro`
}

//ex09
// tratamentos de erro
try{
    console.log(testeHoisting())
    const testeHoisting = function(){
        return "testando..."
    }
}

catch(error){
    console.error(`Deu erro ${error.message}`)
}
*/