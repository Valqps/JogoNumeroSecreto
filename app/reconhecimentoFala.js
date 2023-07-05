const textoChute = document.getElementById('chute');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start())


function onSpeak(evento) {
    var numeroChute = evento.results[0][0].transcript;
    exibeChuteNaTela(numeroChute);
    verificaChute(numeroChute);
}

function exibeChuteNaTela(numeroChute) {
    textoChute.innerHTML = `
    <div class="mensagem__computador"> Você disse: </div>
    <span class="box">${numeroChute}</span>
    `
}
