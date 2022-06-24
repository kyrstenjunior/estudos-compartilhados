function contar() {
    let inputInicio = document.querySelector('#inicio');
    let inputFim = document.querySelector('#fim');
    let inputPassos = document.querySelector('#passos');
    let inicio = Number(inputInicio.value);
    let fim = Number(inputFim.value);
    let passos = Number(inputPassos.value);
    let resultado = document.getElementById('resultado');

    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPassos.value.length == 0) {
        
        resultado.innerHTML = '[ERRO] Estão faltando dados!';
    
    } else {
        
        resultado.innerHTML = 'Contando: <br>'

        if (passos <= 0){
            alert('Passo inválido! Considerado valor 1 para PASSO')
            passos = 1;
        }

        if (inicio < fim){
            //contagem crescente \/
            for (let i = inicio; i <= fim; i += passos) {
                resultado.innerHTML += ` ${i} \u{21AA} `;
            }

        } else {
            //contagem decrescente \/
            for (let i = inicio; i >= fim; i -= passos){
                resultado.innerHTML += ` ${i} \u{21A9} `;
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }

}