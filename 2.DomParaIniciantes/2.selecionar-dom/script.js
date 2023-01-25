// Retorne no console todas as imagens do site

const Imagem = document.querySelectorAll('img')
console.log(Imagem)

// Retorne no console apenas as imagens que começam com a palavra imagem


const img = document.querySelectorAll('img[src^="./assets"]')
console.log(img)

// Selecione todas os links internos (onde o href começa com style)

const href = document.querySelectorAll('[href^="style"]')
console.log(href)

// Selecione o primeiro h2 dentro de .linguagens

// Selecione a ultima p do site