let contador = document.querySelector(".contador");
let valor = 0;

function subtracao(){
    contador.textContent =-- valor;
    if (valor > 0){
        contador.style.color = 'green';
    } else if (valor < 0){
        contador.style.color = 'red';
    } else {
        contador.style.color = 'black';
    }
}

function adicao(){
    contador.textContent =++ valor;
    if (valor > 0){
        contador.style.color = 'green';
    } else if (valor < 0){
        contador.style.color = 'red';
    } else {
        contador.style.color = 'black';
    }
}

function voltar(){
    contador.textContent = valor = 0;
    contador.style.color = 'black';
}