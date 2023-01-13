function Area(n){
    return n*n
}

console.log(Area(5))


function pi(){
    return 3.14
}


var total = 3 * pi()
console.log(total)


function imc(peso, altura){
    var imc = peso / (altura**2)
    return imc
}

console.log(imc(88, 1.73))


function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        console.log("Por favor, insera um número válido")
    }else if(idade >= 60){
        console.log("Você está na terceira idade")
    }else{
        console.log("Vocẽ não está na terceira idade")
    }
}

terceiraIdade('oi')
terceiraIdade(70)
terceiraIdade(50)


function faltaVisitar(paisesVisitados){
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

console.log(faltaVisitar(3))


function dados(){
    var nome = 'Pedro'
    var idade = 28
    function outrosDados(){
        var endereço = 'Rio de Janeiro'
        var idade = 29
        return `${nome}, ${idade} e ${endereõ}`
    }
}

console.log(dados())


/* Exercícíos */

// Crie uma função para verificar se um vetor é Truthy

function Truthy(vet){
    if(vet){
        console.log("É truthy")
    }else{
        console.log("Não é truthy")
    }
}
// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado){
    per = lado*4
    console.log("O perímetro do quadrado é: "+per+ " cm")
}

// Crie uma função que retorne seu nome completo

function fullName(name, lastname){
    console.log("Seu nome completo é: "+name+" "+lastname)
}

// Crie uma função que verifica se um número é par

function par(num){
    if(num % 2 == 0){
        console.log(`O número ${num} é par`)
    }else{
        console.log(`O número ${num} é ímpar`)
    }
}

// Crie uma função que passe o tipo de dado que foi passado como parâmetro

function tipo(dado){
    console.log(typeof dado)
}

// addEventListner é uma função nativa do JavaScript
// o primeiro parãmetro é o evento que occorre e o segundo o CallBack
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer

addEventListener('click', function(){
    console.log('Mateus Delai Takayama')
})

// Corrija o erro abaixo:
var totalPaises = 193

function precisoVisitar(paisesVisitados){
    return `ainda faltam ${totalPaises-paisesVisitados} países para visitar.`
}

function jaVisitei(paisesVisitados){
    return `já visitei ${paisesVisitados} de ${totalPaises} países.`
}
