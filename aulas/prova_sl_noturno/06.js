const buscaPorPlaca = new Map()

buscaPorPlaca.set('kla2324', {modelo: 'civic', cor: 'preto', })
buscaPorPlaca.set('kla241', {modelo: 'f40', cor: 'branca', })
buscaPorPlaca.set('35345', {modelo: 'fox', cor: 'preto', })

const carro = buscaPorPlaca.get('kla2324')
console.log(carro)