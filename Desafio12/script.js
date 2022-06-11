//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 25

if (idade > 18){
    console.log ('Sua idade é MAIOR que 18 anos!')
} else{
    console.log ('Sua idade é MENOR que 18 anos!')
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humanoVivo = true
let humanoMorto = false

if (idade > 21 && humanoVivo == true){
    console.log ('Você é maior de idade e está vivo!')
}else{
    console.log ('Você é menor de idade e/ou está morto :(')
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario = 7

if (aniversario == 1 || aniversario == 12){
    console.log ('Seu aniversário é em Janeiro ou em Dezembro!')
} else {
    console.log ('Seu aniversário NÃO é em Janeiro ou em Dezembro!')
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = 'Maria'

if (nome.substring (0, 1) == 'R'){
    console.log ('Seu nome começa com a letra R')
} else {
    console.log ('Seu nome NÃO começa com a letra R')
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let caracteres = 'Boa noite!'

if (caracteres.length > 6){
    console.log ('Essa mensagem possui mais de 6 caracteres')
} else {
    console.log ('Essa mensagem possui menos de 6 caracteres')
}
