// criação de promessa
const myPromise = new Promise((resolve, reject) =>{
    const nome = 'Kayque'

    if (nome == 'Kayque'){
        resolve(`Usuário ${nome} encontrado`);
    }
    else{
        reject(`O usuário ${nome} não foi encontrado`)
    }
})
// instanciando e usando o then  
// para manipular o retorno da promessa      
myPromise.then((data) => {
    return data.toUpperCase();
}).then((stringModificada) => {
    console.log(stringModificada)
})     
