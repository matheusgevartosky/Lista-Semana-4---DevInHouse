const primeiroArr = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 200, 78, 70, 47];
const segundoArr = [];
const terceiroArr = [1];
const quartoArr = [1, -1];
const quintoArr = null;
const sextoArr = [-2, -2, -2, -2];
const setimoArr = [10, 20, 30];

function calcular(arr) {
  let maiorNumero = 0;
  let menorNumero = 0;
  if (arr != null)
    for (let i of arr) {
      if (maiorNumero < i) {
        maiorNumero = i;
        console.log("maiorNumero " + maiorNumero);
      } else if (menorNumero > i) {
        menorNumero = i;
        console.log("menor numero " + menorNumero);
      }
    }
  else {
    console.log("Não é possivel calcular");
  }
}

calcular(quartoArr);
