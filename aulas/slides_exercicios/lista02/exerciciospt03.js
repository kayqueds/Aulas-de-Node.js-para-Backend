const livro = { titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008 };

const copia = { ...livro, titulo: "Kayque" };

console.log(copia);

const turma = [
  { nome: "Ana", nota: 8.3 },
  { nome: "Bruno", nota: 6.9 },
  { nome: "Duda", nota: 7.0 },
];
// exercicio 16
const NotasMaioresSete = turma.filter((aluno) => aluno.nota >= 7);
console.log(NotasMaioresSete);

// exercicio 17
const apenasNomes = turma.map((aluno) => aluno.nome);
console.log(apenasNomes);

//media exercicio 18
const somarNotas = turma.reduce((acc, nota) => acc + nota.nota, 0);
const media = somarNotas / 3;
console.log(media.toFixed(2));

const produtos = [
  { nome: "Caderno", preco: 15.9 },
  { nome: "Lápis", preco: 2.5 },
  { nome: "Mochila", preco: 120 },
];

const somenteString = produtos.map(
  (produtos) =>
    `Produto: ${produtos.nome} custou: R$ ${produtos.preco.toFixed(2)}`
);

console.log(somenteString);

/*
0. Desafio: Dado o array abaixo, agrupe-o por setor (ex: TI, RH, Financeiro) usando .reduce(). 
funcionarios = [{ nome: "Ana", setor: "TI" }, { nome: "Rafa", setor: "RH" }, { nome: "Lia", setor: 
"TI"}, { nome: "Paulo", setor: "Financeiro" }] 

*/

const funcionarios = [
  { nome: "Ana", setor: "TI" },
  { nome: "Rafa", setor: "RH" },
  { nome: "Lia", setor: "TI" },
  { nome: "Paulo", setor: "Financeiro" },
];

const agruparSetor = funcionarios.reduce((acc, funcionario) => {
  const setor = funcionario.setor
  if(acc[setor]){
    acc[setor].push(funcionario)
  }
  else{
    acc[setor] = [funcionario]
  }

  return acc

},{})

console.log(agruparSetor)
