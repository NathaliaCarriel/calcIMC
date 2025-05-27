let peso = document.getElementById(peso);
let altura = document.getElementById(altura);
let resultado = document.getElementById(botao);
let botao = document.getElementById(calcular);

botao.onclick = () => {

  var imc = Number(peso.value) / (Number(altura.value) ** 2);
  var classificacao = '';

  if( imc < 18.5 ) {
    classificacao = 'Abaixo do peso';
  }else if( imc < 25 ) {
    classificacao = 'Peso normal';
  }else if( imc < 30 ) {
    classificacao = 'Sobrepeso';
  }else if( imc < 35 ) {
    classificacao = 'Obesidade grau 1';
  }else if( imc < 40 ) {
    classificacao = 'Obesidade grau 2';
  }else {
    classificacao = 'Obesidade grau 3 (GRAVE)';
  }
  resultado.innerText = 'Seu IMC é: ' + imc.toFixed(2) + '\nClassificação: ' + classificacao;
};