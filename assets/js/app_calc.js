function insert(num) {
  document.querySelector(".tela").innerHTML += num;
}

function clean() {
  document.querySelector(".tela").innerHTML = "";
}

function back() {
  let tela = document.querySelector(".tela").innerHTML;
  document.querySelector(".tela").innerHTML = tela.substring(0, tela.length - 1);
}

function calcular() {
  let tela = document.querySelector(".tela").innerHTML;
  if (tela) {
      try {
          document.querySelector(".tela").innerHTML = eval(tela);
      } catch (error) {
          document.querySelector(".tela").innerHTML = "Erro!";
          console.error("Erro ao calcular:", error);
      }
  } else {
      document.querySelector(".tela").innerHTML = "Sem Calculo...";
  }
}

// function insert(number) {
//   var numero = document.getElementById('resultado').innerHTML;
//   document.getElementById('resultado').innerHTML = numero + number
// }
// //essa função serve para quando você clicar no botão "C" ele apaga tudo que está escrito no Resultado.
// function clean() {
//   document.getElementById('resultado').innerHTML = "";
// }
// //essa função serve para quando você clicar no botão "<" ele apaga um número por vez.
// function back() {
//   var resultado = document.getElementById('resultado').innerHTML;
//   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
// }
// //essa função serve para quando você clicar no "=" ele calcular. O "eval" serve para fazer todo tipo de calculo.
// function calcular() {
//   var resultado = document.getElementById('resultado').innerHTML
//   if (resultado) {
//       document.getElementById('resultado').innerHTML = eval(resultado);
//   }
//   //Caso não haja nada para calcular vai aparecer a mensagem "nada para calcular".
//   else {
//       document.getElementById('resultado').innerHTML = ("nada para calcular")
//   }
// }