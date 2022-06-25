let susan = document.getElementById('susan');
let peter = document.getElementById('peter');
let anna = document.getElementById('anna');
let bill = document.getElementById('bill');
let next = document.querySelector('.img-proximo');
let previous =  document.querySelector('.img-anterior');
let contador = 0;

next.addEventListener('click', function(){

    if (contador == 0) {
        contador++;
        susan.style.display = 'none';
        peter.style.display = 'flex';
        anna.style.display = 'none';
        bill.style.display = 'none';
    } else if (contador == 1){
        contador++;
        susan.style.display = 'none';
        peter.style.display = 'none';
        anna.style.display = 'flex';
        bill.style.display = 'none';
    } else if (contador == 2){
        contador++;
        susan.style.display = 'none';
        peter.style.display = 'none';
        anna.style.display = 'none';
        bill.style.display = 'flex';
    } else if (contador == 3){
        contador = 0;
        susan.style.display = 'flex';
        peter.style.display = 'none';
        anna.style.display = 'none';
        bill.style.display = 'none';
    }

});

previous.addEventListener('click', function(){
    
    if (contador == 0) {
        contador = 3;
        susan.style.display = 'none';
        peter.style.display = 'none';
        anna.style.display = 'none';
        bill.style.display = 'flex';
    } else if (contador == 3){
        contador--;
        susan.style.display = 'none';
        peter.style.display = 'none';
        anna.style.display = 'flex';
        bill.style.display = 'none';
    } else if (contador == 2){
        contador--;
        susan.style.display = 'none';
        peter.style.display = 'flex';
        anna.style.display = 'none';
        bill.style.display = 'none';
    } else if (contador == 1){
        contador--;
        susan.style.display = 'flex';
        peter.style.display = 'none';
        anna.style.display = 'none';
        bill.style.display = 'none';
    }

});

function surpreenda(){
    let array = [susan, peter, anna, bill];
    let numeros = array.length;
    let numAleatorio = Math.floor(Math.random() * numeros);

    if (numAleatorio == 0){
        susan.style.display = 'flex';
        peter.style.display = 'none';
        anna.style.display = 'none';
        bill.style.display = 'none';
    } else if (numAleatorio == 1){
        susan.style.display = 'none';
        peter.style.display = 'flex';
        anna.style.display = 'none';
        bill.style.display = 'none';
    } else if (numAleatorio == 2){
        susan.style.display = 'none';
        peter.style.display = 'none';
        anna.style.display = 'flex';
        bill.style.display = 'none';
    } else {
        susan.style.display = 'none';
        peter.style.display = 'none';
        anna.style.display = 'none';
        bill.style.display = 'flex';
    }
}