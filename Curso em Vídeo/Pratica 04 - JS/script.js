function gerar() {

    let iNum = document.getElementById('numero');
    let select = document.getElementById('meuSelect');
    let numero;

    if (iNum.value.length == 0){

        alert('Por favor, digite um número!');

    } else {

        numero = Number(iNum.value);
        select.innerHTML = '';

        for (let seq = 0; seq <= 10; seq++){
            let item = document.createElement('option');
            item.text = `${numero} X ${seq} = ${numero*seq}`;
            item.value = `option${seq}`;
            select.appendChild(item);
        }

    }
    
}