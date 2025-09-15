// exercicio 01
/*
function esperar2Segundos(){

    return new Promise((resolve, reject) => {
        console.log('Vai demorar 2 segundos')
        setTimeout(() => {
            resolve('Mensagem pro usuário')
        },2000)
    })
}
esperar2Segundos()
    .then((msg => console.log(msg)));

function verificarPar(numero) {
  return new Promise((resolve, reject) => {
    console.log("---Verificador de par ou impar---");
    setTimeout(() => {
      if (numero % 2 == 0) {
        resolve(`${numero} é par`);
      } else {
        reject(`${numero} é impar`)
      }
    }, 2000);
  });
}

verificarPar(6)
.then((resSucess => console.log(`Resutado: ${resSucess}`)))
.catch((resError => console.log(`Resultado: ${resError}`)))
.finally(() => console.log('-------FIM DO PROGRAMA-------'))
*/

function apiFilmes() {
  return new Promise((resolve, reject) => {
    console.log("Buscando filme...");
    setTimeout(() => {
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a3a1298")
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            resolve(
              `Título: ${data.Title}, Ano: ${data.Year}, Gênero: ${data.Genre}`
            );
          } else {
            reject("Filme não encontrado");
          }
        })
        .catch((erro) => {
          reject("Erro na requisição: " + erro);
        });
    }, 2000);
  });
}

apiFilmes()
  .then((apiSucess) => console.log(apiSucess))
  .catch((apiError) => console.error(apiError));
