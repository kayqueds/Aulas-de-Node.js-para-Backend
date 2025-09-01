const readline = require('readline');
function contadorRegressivo(segundos) {
    let tempo = segundos;
    const intervalo = setInterval(() => {
        process.stdout.write(`\r⏳ Tempo restante: ${tempo}s`);
        tempo--;
        if (tempo < 0) {
            clearInterval(intervalo);
            console.log("\n✅ Tempo finalizado!");
        }
    }, 1000);
}

// Interface do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar com Promise
function perguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

// Simula tempo de espera
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Etapas do jogo
function iniciarAtendimento() {
    console.log('----------------- Bem vindo a nossa pizzaria --------------------')
    console.log('                   Vamo Cume!!!                                  ')
    console.log('-----------------------------------------------------------------')

    perguntar("👤 Qual o seu nome? ")
        .then(nome => {
            console.log(`Olá, ${nome}!`);
            return perguntar("Qual sabor de pizza você quer? (calabresa, frango, marguerita): ");
        })
        .then(sabor => {
            console.log(`Anotado: pizza de ${sabor}.`);
            return perguntar('Deseja borda recheada(sim / não) - ')

        })
        .then((borda) => {
            console.log(`Pedido confirmado: Pizza com borda ${borda.toLowerCase() === 'sim' ? 'recheada' : 'normal'} `)
            console.log("Pizza está sendo preparada...");
            //contadorRegressivo(5)
            return esperar(5000);
        })
        .then(() => {
            contadorRegressivo(3)
            console.log("Pizza está no forno...");
            return esperar(5000); // Simula tempo de forno
        })
        .then(() => {

            console.log("✅ Pizza pronta!");
            return perguntar("Deseja entrega ou retirada? ");
        })
        .then(entrega => {
            if (entrega.toLowerCase() === "entrega") {
                contadorRegressivo(5)
                console.log("🚴 Entregador a caminho! Chega em 30 minutos.");
                console.log("🎉 Obrigado por escolher a Pizzaria Vamo Cume!");
                rl.close();
                return esperar(5000);
            } else {
                contadorRegressivo(3)
                console.log("🏃‍♂ Pode retirar em 20 minutos.");
                console.log("🎉 Obrigado por escolher a Pizzaria Vamo Cume!");
                rl.close();
                return esperar(3000);
            }



        })
        .catch(err => {
            console.error("Erro no atendimento:", err);
            rl.close();
        });
}

iniciarAtendimento();