
const user = [
    { nome: 'João', idade: 25, ativo: true },
    { nome: 'Maria', idade: 30, ativo: false },
    { nome: 'Pedro', idade: 22, ativo: true },
]

const result = user.filter(user => user.ativo == false );
const dobrarIdade = user.map(user => user.idade * 2);


const alterarIdade = user.map(user => ({...user, outraIdade: user.idade + 1}))



console.log(dobrarIdade);
console.log(result);
console.log(alterarIdade);

// comparação
/*
 == valor
 === valor e tipo
*/


