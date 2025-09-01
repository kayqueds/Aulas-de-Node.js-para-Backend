// calback é uma função passada como argumento de outra função

function preparar_lanches(nomeDoLanche, callback){
    console.log(`Seu ${nomeDoLanche} está sendo preparado...`);
    setTimeout(()=>{
        
    }, 5000)
}

function pegarLanche(resultado){
    console.log(`Valew, obrigado ${resultado}`);
}

pegarLanche('X-burguer', pegarLanche);

console.log('Pedidio feito! Enquanto isso, vou escolher um mesada')
