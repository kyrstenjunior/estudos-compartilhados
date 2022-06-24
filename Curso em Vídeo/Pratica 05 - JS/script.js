/* Meu pensamento:

function adicionar() {

    let numero = document.getElementById('numero');
    if (numero.value.length == 0){
        alert('[ERRO] Digite os valores e clique no botão "Adicionar" !');
    } else {
        let n = Number(numero.value);
        let select = document.getElementById('select');
        let array = [];

        for (let pos = 0; pos <= 9; pos++){
            array[pos] = n;
            let item = document.createAttribute('option');
            item.text = `Valor ${n} adicionado.`
            select.appendChild(item);
            
        }
                 
    }
    
} */

// como foi feito na aula:

let numero = document.getElementById('numero');
let select = document.getElementById('select');
let resultado = document.querySelector('#resultado');
let array = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, array)){
        
        array.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `O valor ${numero.value} foi inserido !`;
        select.appendChild(item);
        resultado.innerHTML = '';
        
    } else {

        alert('[ERRO] Valor inválido ou já foi adicionado na lista!')
    }

    numero.value = '';
    numero.focus();

}


function finalizar(){
    if (array.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar!')
    } else {

        let total = array.length;

        /*No caso maior e menor, considerando o primeiro item do array como maior por exemplo, usa-se o for in para varrer todo o array, a cada posição (array[pos]) verificada, se for maior do que o primeiro numero declarado no let e coloca esse valor dentro */

        let maior = array[0];
        let menor = array[0];
        let soma = 0;

        for (let pos in array){
            soma += array[pos];
            if (array[pos] > maior)
                maior = array[pos];
            if (array[pos] < menor)
                menor = array[pos];
        }

        resultado.innerHTML = `<p>Ao todo, temos ${total} números cadastrados;</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior};</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor};</p>`;    
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma};</p>`;    
        resultado.innerHTML += `<p>A média dos valores digitados é ${soma/array.length}.</p>`;
    }

}