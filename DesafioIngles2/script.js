//Crie 3 variáveis, cada uma com um array:
//- Comedy
//-Action
//-Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
//-title:
//-director:
//-year:

let comedy = [{
    title: '"Superhero Movie"'
},{
    director: 'Craig Mazin'
},{
    year: 2008
}]

let action = [{
    title: '"Sherlock Holmes"'
},{
    director: 'Guy Ritchie'
},{
    year: 2010
}]

let fantasy = [{
    title: '"Shrek"'
},{
    director: 'Andrew Adamson and Vicky Jenson'
},{
    year: 2001
}]

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

let x = fantasy

if (x == action){
    console.log (`My favorite movie is ${action[0].title}, director ${action[1].director}, ${action[2].year}.`)
} else if (x == comedy){
    console.log (`Not even 5 starts but I loved is ${comedy[0].title}, director ${comedy[1].director}, ${comedy[2].year}.`)
} else {
    console.log (`It's not the favorite but it's what I watch the most is ${fantasy[0].title}, director ${fantasy[1].director}, ${fantasy[2].year}.`)
}