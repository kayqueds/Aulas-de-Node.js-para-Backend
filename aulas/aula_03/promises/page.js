// usando as props
function conseguirMesa(numeroPessoas){
    return new Promise((resolve, reject)=>{
        console.log('Verificando disponibilidade de mesa');
        setTimeout(()=>{
            if(numeroPessoas <= 4){
                console.log('Mesa disponível');
                resolve('Mesa para ' + numeroPessoas + ' pessoas');
            }else{
                console.log('Mesa não disponível');
                reject('Mesa não disponível');
            }
        }, 4000);
    })
}

conseguirMesa(5)
.then((resultado) => {console.log('Sucesso: ', resultado)})
.catch((erro) => {console.log('Erro: ', erro)})