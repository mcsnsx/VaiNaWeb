let inputs = document.querySelectorAll("input")
let [input1, input2] = inputs    
let btn = document.querySelector("#botao")
let textLogin = document.querySelector('.conta')


function logar() {
    if (input1.value && input2.value.length >=8) {
        btn.classList.remove("botao")
        btn.classList.add("botao-logado")
        textLogin.style.color = '#2051ff';
    } else {
        seta.classList.add("botao")
    }
}

input1.addEventListener('input', logar)
input2.addEventListener('input', logar)