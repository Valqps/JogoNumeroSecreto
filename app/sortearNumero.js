const menorValor = 1; /*Usar sempre números de 1 para cima, até o limite do maiorValor*/
const maiorValor = 1000;
const textoHtmlMenorValor = document.getElementById('menor-valor');
const textoHtmlMaiorValor = document.getElementById('maior-valor');

textoHtmlMenorValor.innerHTML = menorValor;
textoHtmlMaiorValor.innerHTML = maiorValor;
const numeroSecreto = sortearNumero();

function sortearNumero() {
    let numero = -1;
    while (numero < menorValor) {
        numero = parseInt(Math.random()*maiorValor)+1;
    }
    return numero;
}


