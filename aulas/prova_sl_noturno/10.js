const nota = [100, 10,20,30,40,40,10,50]

const copia = [...new Set(nota)]
const usarSort = copia.sort((a,b) => b - a)
const usarMap = usarSort.map(num => `Nota: ${num}`)


console.log('Array', copia)
console.log('Array ordenado', usarSort)
console.log('Array com map', usarMap)

