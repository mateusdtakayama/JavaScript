var videoGames = ['Switch', 'ps4', 'xbox']

console.log(videoGames[1])

videoGames.push('3DS') // acrescenta um elemento na última posição

videoGames.pop()
videoGames.pop() // retira o último elemento do array


// Loops

for(var numero = 0; numero <= 10; numero++){
    console.log(numero)
}

// Crie um array com todos os anos que o Brasil ganhou a copa

var copa = ['1959', '1962', '1978', '1994', '2002']

for(let i=0; i<copa.length; i++){
    console.log(`O Brasil ganhou no ano ${copa[i]}`)
}

var frutas = ['banana', 'maça', 'pera', 'uva', 'melancia']

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'pera'){
        break;
    }
}

var fruta = frutas[4]

console.log(fruta)
