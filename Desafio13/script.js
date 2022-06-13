//1 - Criar um loop que conte de 1 até 10 usando FOR
console.log ('CONTAGEM DE 1 A 10 - FOR')

for (cont = 1; cont <= 10; cont++){
    console.log(cont)
}



//2 - Criar um loop que conte de 10 até 1 usando WHILE
console.log ('CONTAGEM DE 10 A 1 - WHILE')

let x = 10

while(x <= 10 && x >= 1){
    console.log (x)
    x -=1
}



//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log ('CONTAGEM DE 1 A 100 , IMPARES - FOR')

for (cont = 1; cont <= 100; cont +=2){
    console.log(cont)
}

console.log ('CONTAGEM DE 1 A 100 , IMPARES - WHILE')

let y = 1

while(y >= 1 && y <= 100){
    console.log (y)
    y +=2
}



//4- Criar um loop que conte todos os números pares de 0 a 100
console.log ('CONTAGEM DE 0 A 100, PARES - FOR')

for (soma = 0; soma <= 100; soma +=2){
    console.log(soma)
}

console.log ('CONTAGEM DE 1 A 100, PARES - WHILE')

let n = 0

while(n >= 0 && n <= 100){
    console.log (n)
    n +=2
}
