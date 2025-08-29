/*
let btn = document.getElementById('btn');
const titulo = document.getElementById('titulo')
const resultado = document.getElementById('res');


btn.addEventListener('click', ()=>{
    alert('Você clicou no botão')
    titulo.style.color = 'gray';
    const img = document.createElement('img');
    img.setAttribute('src', 'https://via.placeholder.com/150');
    resultado.appendChild(img);

});
btn.addEventListener('mouseenter', ()=>{
    btn.style.backgroundColor = 'red';
});

btn.addEventListener('mouseout', ()=>{
    btn.style.backgroundColor = 'blue'
})
    */
// js executa linha a linha

console.log('Início do código')   
setTimeout(() =>{
    console.log('Enviando Id do usuário')
    setTimeout(()=>{
        console.log('Buscando dado do usuário com id 12345')
        setTimeout(()=>{
            console.log('Dado do usuário com id 12345 encontrado');
        }, 3500)
          
    }, 4500)
    }, 5000);  
console.log('Fim do código');     