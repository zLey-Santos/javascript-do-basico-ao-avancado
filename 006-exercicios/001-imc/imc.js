// const peso = parseFloat(prompt("Digite seu peso em quilogramas:")); utilizar uma pagina index.html para usar metodo prompt
// const altura = parseFloat(prompt("Digite sua altura em metros:"));

const peso = 70;
const altura = 1.85;

const IMC = Number((peso / (altura * altura)).toFixed(2));

switch (true) {
  case IMC < 17:
    console.log(`O seu IMC:[${IMC}], muito abaixo do peso`);
    break;

  case IMC > 17 && IMC < 18.59:
    console.log(`O seu IMC:[${IMC}], abaixo do peso`);
    break;

  case IMC > 18.5 && IMC < 24.99:
    console.log(`O seu IMC:[${IMC}], peso normal`);
    break;

  case IMC > 25 && IMC < 29.99:
    console.log(`O seu IMC:[${IMC}], acima do peso`);
    break;

  case IMC > 30 && IMC < 34.99:
    console.log(`O seu IMC:[${IMC}], obesidade I`);
    break;

  case IMC > 35 && IMC < 39.99:
    console.log(`O seu IMC:[${IMC}], Obesidade II`);
    break;

  default:
    console.log(`Valor do IMC:[${IMC}], alto risco.`);
    break;
}
