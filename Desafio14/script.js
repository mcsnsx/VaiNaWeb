//1 - crie uma função que exiba uma mensagem no console
function Menssagem (){
    console.log ('Sou uma mensagem exibida no console...')
}

Menssagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function Name(nome){
    console.log (`Meu nome é ${nome}`)
}

Name('Maria')

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function Musica(nome, idade, estilo){
    console.log (`Meu nome é ${nome}`)
    console.log (`Minha idade é ${idade} anos`)
    console.log (`Meu estilo de música favorito é ${estilo}`)
}

Musica('Xavier', 26, 'Blues')

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function Entretenimento(filme, musica){
    console.log (`Meu filme favorito é ${filme}`)
    console.log (`Meu filme favorito é ${musica}`)
}

Entretenimento('Ray', 'Ray Charles - You dont know me')

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function Triplo(x){
    console.log (x * 3)
}

Triplo(2)