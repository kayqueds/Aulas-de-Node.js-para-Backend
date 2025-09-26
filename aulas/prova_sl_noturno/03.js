function API_1(){
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(() => {
            if(error == false){
                resolve('API processada com sucesso')
            }
            else{
                reject('Algo deu errado')
            }
        }, 2000)
    })
}
function API_2(){
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(() => {
            if(error == false){
                resolve('API 2 processada com sucesso')
            }
            else{
                reject('Algo deu errado')
            }
        }, 2000)
    })
}
function API_3(){
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(() => {
            if(error == false){
                resolve('API 3 processada com sucesso')
            }
            else{
                reject('Algo deu errado')
            }
        }, 2000)
    })
}

function resultadoAPi(result){
    console.log(`As APIS foram executadas ${result}`)
}

// exemplo de apis com promise
Promise.all([API_1(), API_2(), API_3()])
.then(resultadoAPi)
.catch(error => console.log('Api com', error))