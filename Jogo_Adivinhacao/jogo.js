let numeroSecreto = gerarNumero();
let tentativas = 0;
let palpites = [];
let recorde = localStorage.getItem('recorde') || null;

const inputPalpite = document.getElementById('palpite');
const botaoChutar = document.getElementById('chutar');
const botaoReiniciar = document.getElementById('reiniciar');
const resultado = document.getElementById('resultado');
const spanTentativas = document.getElementById('tentativas');
const spanRecorde = document.getElementById('recorde');
const listaPalpites = document.getElementById('listaPalpites');

if (recorde) {
    spanRecorde.textContent = recorde;
}

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function adicionarPalpite(tipo) {
    const palpite = parseInt(inputPalpite.value);
    const tag = document.createElement('span');
    tag.className = `palpite-tag ${tipo}`;
    tag.textContent = palpite;
    listaPalpites.appendChild(tag);
}

function verificarPalpite() {
    const palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.textContent = 'Digite um número válido entre 1 e 100!';
        resultado.className = 'resultado erro';
        return;
    }

    tentativas++;
    spanTentativas.textContent = tentativas;

    if (palpite === numeroSecreto) {
        resultado.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s)! 🎉`;
        resultado.className = 'resultado acerto';
        adicionarPalpite('acerto');
        finalizarJogo();
    } else if (palpite < numeroSecreto) {
        resultado.innerHTML = 'Muito baixo!<br>Tente um número maior. ⬆️';
        resultado.className = 'resultado dica';
        adicionarPalpite('baixo');
    } else {
        resultado.innerHTML = 'Muito alto!<br>Tente um número menor. ⬇️';
        resultado.className = 'resultado dica';
        adicionarPalpite('alto');
    }

    inputPalpite.value = '';
    inputPalpite.focus();
}

function finalizarJogo() {
    inputPalpite.disabled = true;
    botaoChutar.style.display = 'none';
    botaoReiniciar.style.display = 'inline-block';

    if (!recorde || tentativas < recorde) {
        recorde = tentativas;
        localStorage.setItem('recorde', recorde);
        spanRecorde.textContent = recorde;
        resultado.textContent += '\nNovo recorde! 🏆';
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 0;
    spanTentativas.textContent = '0';
    resultado.textContent = '';
    resultado.className = 'resultado';
    listaPalpites.innerHTML = '';
    inputPalpite.disabled = false;
    inputPalpite.value = '';
    inputPalpite.focus();
    botaoChutar.style.display = 'inline-block';
    botaoReiniciar.style.display = 'none';
}

botaoChutar.addEventListener('click', verificarPalpite);
botaoReiniciar.addEventListener('click', reiniciarJogo);

inputPalpite.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (botaoChutar.style.display !== 'none') {
            verificarPalpite();
        } else {
            reiniciarJogo();
        }
    }
});
