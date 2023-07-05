function verificaChute(numeroChute) {
    const numero = +numeroChute;
    if (verificaSeNaoENumero(numero)){
        textoChute.innerHTML += `</br><div class="mensagem__computador">Valor inválido. Fale um número.</div>`;
        return
    }
    if (verificaSeNaoEstaNoIntervalo(numero)){
        textoChute.innerHTML += `</br><div class="mensagem__computador">Valor inválido. Fale um número maior que ${menorValor} e menor que ${maiorValor}.</div>`
        return
    }
    if (numero===numeroSecreto){
        document.body.innerHTML = `
        <div class="telaVencer">
            <div class="telaVencer__conteudo">
                <h2>Você venceu!</h2>
                <h3>O número sorteado era ${numeroSecreto}.</h3>
                <button class="botaoJogarNovamente" id="botaoReload">Jogar novamente   <i class="fa-solid fa-rotate-right"></i></button>
            </div>
            <div class="telaVencer__conteudo imagemConfetes">
                <img src="imagens/fogos.gif">
            </div>
        </div>
        `
    } else if (numero < numeroSecreto){
        textoChute.innerHTML += `
        <div class="mensagem__computador">O número secreto é maior. <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    } else {
        textoChute.innerHTML += `
        <div class="mensagem__computador">O número secreto é menor. <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
}

function verificaSeNaoENumero(numero) {
   return Number.isNaN(numero);
}

function verificaSeNaoEstaNoIntervalo(numero){
    return (numero>maiorValor)||(numero<menorValor);
}

document.body.addEventListener('click', (e) =>{
    if (e.target.id == 'botaoReload') {
        window.location.reload();
    }
})
