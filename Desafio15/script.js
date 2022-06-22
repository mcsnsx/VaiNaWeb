 // Crie um array que receba 5 itens e exiba no console.
let animais = ['leão', 'gato', 'cachorro', 'cavalo', 'águia']
console.log (animais)

// Utilize um método para adicionar um nome ao inicio do array.
animais.splice (0, 0, 'peixe') 
console.log(animais)

// Utilize um método para remover o último nome do array.
animais.pop()
console.log(animais)

// Utilize um método para adicionar dois nomes ao fim do array.
animais.push('girafa', 'porco')
console.log(animais)

// Utilize um método para remover o primeiro nome do array.
animais.shift()
console.log(animais)

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return (a-b) 
})
console.log(numbers)
