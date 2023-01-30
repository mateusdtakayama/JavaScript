// Retorne no console todas as imagens do site

const Imagem = document.querySelectorAll('img')
console.log(Imagem)

// Retorne no console apenas as imagens que começam com a palavra imagem


const img = document.querySelectorAll('img[src^="./assets"]')
console.log(img)

// Selecione todas os links internos (onde o href começa com style)

const href = document.querySelectorAll('[href^="style"]')
console.log(href)

// Selecione o primeiro p dentro de .teste

const pTeste = document.querySelector('.teste p')
console.log(pTeste)

// Selecione a ultima p do site

const Paragrafo = document.querySelectorAll('p')
console.log(Paragrafo[Paragrafo.length-1])
