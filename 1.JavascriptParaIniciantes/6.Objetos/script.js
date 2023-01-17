var pessoa = {
    nome: "Pedro",
    idade: 28,
    area: function(lado){
        return lado*lado
    }
}

console.log(pessoa.area(5))

var objeto = {
    tamanho: 15,
    sexo: 'masculino',
    idade: 15,
    metadeIdade(){
        return this.idade/2
    }
}

pessoa.idade = objeto.idade

console.log(pessoa.idade)

objeto.esconder = function(){
    console.log('Escondi')
}

// Crie um objeto com seus dados Pessoais

var eu = {
    nome: 'Mateus',
    sobrenome: 'Delai',
    idade: 21,
    profissao: 'Desenvolvedor',
}

eu.FullName = function(){
    console.log(`Meu nome compleo é ${this.nome} ${this.sobrenome}`)
}

// Modifique a propridade preco para 3000

var audi = {
    preco: 1000,
    portas: 4,
    pneus: 4,
    ano: 2004,
}

audi.preco = 3000

// Crie um objeto labrador que é preto, tem 10 anos e late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    idade: 10,
    cor: 'Preto',
    viuHomem(pessoa){
        if(pessoa === 'homem'){
            console.log('Au')
        }else{
            console.log('Nada')
        }
    }
}


// Tudo é objeto

var nome = 'André'

nome.length // 5
nome.charAt(1) // 'n'
nome.replace('ré', 'réi') // Andréi
nome //
