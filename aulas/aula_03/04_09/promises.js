
/*
function soma(n1, n2){
    return new Promise((resolve, reject)=> {
    const somaNumeros = n1 + n2;
        if (somaNumeros > 0) {
            resolve(somaNumeros);
        }
        else{
            reject('A soma não é válida')
        }
    })

}
soma(2)
.then((resultado) =>{console.log(`O resultado da soma foi: ${resultado}`)})
.catch((erro) => {console.log(`Erro: ${erro}`)})
*/

function maiordeidade(idade){
    return new Promise((resolve, reject)=>{
        if (idade >= 18){
            resolve('Maior de idade')
        }
        else{
            reject('Menor de idade')   
        }
    })
} 

setTimeout(() =>{
    console.log('Verificando idade....')
    setTimeout(() => {
    maiordeidade(18)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}, 2000)
}, 0,500)


/*
maiordeidade(17).then((res) => console.log(res)).catch((err) => console.log(err));    
function mediaAlunos(n1, n2, n3){
    return new Promise((resolve, reject) => {
        const media = (n1+n2+n3)/3;
        
        if (media > 5){
            resolve(`Aluno aprovado ${media.toFixed(2)}`);                     
        }
        else{
            reject(`Aluno reprovado ${media.toFixed(2)}`)
        }
      
    })
}

mediaAlunos(5,6,1) 
.then((resposta) => {console.log(resposta)})
.catch((erro) => {
    console.log(`STATUS: ${erro}`)  
    console.log(`Tente novamente!`)

});
*/