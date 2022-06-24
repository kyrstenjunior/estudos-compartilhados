// de 0 a 13 anos = menino/menina;
// de 14 a 25 anos = jovem;
// de 26 a 65 anos = adulto;
// de 66 a 120 anos = idoso;

function verificar() {

    let data = new Date();
    let anoAtual = data.getFullYear();
    let inputAno = document.getElementById('idade');
    let ano = Number(inputAno.value);
    let idade = anoAtual - ano;
    let inputSexoM = document.getElementById('masc');
    let inputSexoF = document.getElementById('fem');
    let resultado = document.getElementById('resultado');
    let sexo = 'Não definido';

    if (inputSexoM == 'true') {
        sexo = 'Homem'
    } else if (inputSexoF == 'true') {
        sexo = 'Mulher'
    } else {
        sexo = '[Erro]'
    }

    if (idade < 13) {
        resultado.innerHTML = `Escaneamos ${sexo} de ${idade} anos.`
        resultado.innerHTML = '<img src="./img/menino.png" alt="menino">'
    }

}