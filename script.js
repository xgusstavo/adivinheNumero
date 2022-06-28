'use strict';

let numero = document.querySelector('.number');
let numeroAleatorio = Math.trunc(Math.random() * 20 + 1);

let pontos = document.querySelector('.score');
let pontosMaximo = document.querySelector('.highscore');
let pontuacao = 20;

function mostrarMensagem(mensagem) {
  document.querySelector('.message').textContent = mensagem;
}

/* Função do botão Check! */
document.querySelector('.check').addEventListener('click', adivinhar);
function adivinhar() {
  let inputValor = Number(document.querySelector('.guess').value);

  if (!inputValor) {
    mostrarMensagem('Você deve digitar um número...');
  } else if (inputValor === numeroAleatorio) {
    mostrarMensagem('Você acertou!');
    numero.textContent = numeroAleatorio;
    if (pontuacao > pontosMaximo.textContent) {
      pontosMaximo.textContent = pontuacao;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (inputValor >= 21) {
    mostrarMensagem('Digite um número entre 1 e 20...');
  } else if (inputValor !== numeroAleatorio) {
    if (pontuacao > 1) {
      mostrarMensagem(
        inputValor > numeroAleatorio
          ? 'Chutou muito alto!'
          : 'Chutou muito baixo!'
      );
      pontuacao--;
      pontos.textContent = pontuacao;
    } else {
      mostrarMensagem('Você perdeu!');
      pontos.textContent = 0;
    }
  }

  document.querySelector('.guess').value = '';
}

/* Função do botão Again! */
document.querySelector('.again').addEventListener('click', recomecar);
function recomecar() {
  numeroAleatorio = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  numero.textContent = '?';
  pontos.textContent = 20;
  pontuacao = 20;
  mostrarMensagem('Comece a adivinhar...');
}
