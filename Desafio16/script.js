// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    nome: 'Maria',
    idade: 26,
    humano: true
}

console.log (eu)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.dinheiro = 'não tenho'

console.log (eu)

// Remova uma propriedade desse objeto.
delete eu.humano

console.log (eu)

//Mostre no console todas as propriedades desse objeto.
console.log (eu.nome)
console.log (eu.idade)
console.log (eu.humano)
console.log (eu.dinheiro)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    nome: 'Vera',
    idade: 62,
    telefone: '20212022',
    amigos: ['Zé', 'Lourdes', 'Carmem', 'João da Feira']
}, {
    nome: 'Enzo',
    idade: 14,
    telefone: '40028922',
    amigos: ['Katy', 'Fabinho', 'Ariel', 'Akira']
}, {
    nome: 'Eva',
    idade: 33,
    telefone: '0800123321',
    amigos: ['Adão', 'Gabriel', 'Madalena', 'Matheus']
}, {
    nome: 'Larissa',
    idade: 26,
    telefone: '987765443',
    amigos: ['Raquel', 'Lucas', 'Luana', 'Diego']
},{
    nome: 'Geraldo',
    idade: 57,
    telefone: '20232024',
    amigos: ['Tobias', 'Carlão', 'Joséfa', 'Marilia']
}]

// Mostre no console o nome de um amigo de cada lista.
console.log (cadastro[0].amigos[2])
console.log (cadastro[1].amigos[3])
console.log (cadastro[2].amigos[1])
console.log (cadastro[3].amigos[0])
console.log (cadastro[4].amigos[3])
