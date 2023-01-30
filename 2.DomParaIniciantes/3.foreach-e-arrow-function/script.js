// const imgs = document.querySelectorAll('img')
// console.log(imgs)


// let i = 0;
// imgs.forEach(function(){
//     console.log(i++)
// })

// imgs.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)


titulosArray.forEach(function(tit){
    console.log(tit)
})


// Mostre no console cada paragrafo do site

const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((paragrafo) => console.log(paragrafo));

// Mostre os textos dos parágrafos no console

paragrafos.forEach((paragrafo) => console.log(paragrafo.innerHTML))

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {

console.log(item, index);

});

let i = 0;
imgs.forEach(() => {
console.log(i++);
});
imgs.forEach(() => i++);