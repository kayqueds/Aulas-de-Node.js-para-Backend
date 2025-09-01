const readLine = require('readline');

function contadorRegressivo(segundos){
    let tempo = segundos
    const intervalo = setInterval(() => {
        process.stdout.write(`\r${tempo--} `)
        if(tempo < 0) {
            clearInterval(intervalo)
            process.stdout.write('\nTempo esgotado!\n')
        }
    }, 1000)
}

function perguntar(texto){
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => rl.question(texto, resolve))) {
            resolve(resposta)
        })
    })
}


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


function esperar(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms))
}

function iniciarAtendimento(){
    console.log('-------------Bem-vindo a nossa pizzaria---------------------')
    
}