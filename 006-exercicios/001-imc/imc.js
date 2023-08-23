// const peso = parseFloat(prompt("Digite seu peso em quilogramas:")); utilizar uma pagina index.html para usar metodo prompt
// const altura = parseFloat(prompt("Digite sua altura em metros:."));

const peso = 70;
const altura = 1.85;

const imc = Number((peso / (altura * altura)).toFixed(2));

switch (true) {
  case imc < 17:
    console.log(`O seu IMC:[${imc}], muito abaixo do peso`);
    break;

  case imc > 17 && imc < 18.59:
    console.log(`O seu IMC:[${imc}], abaixo do peso`);
    break;

  case imc > 18.5 && imc < 24.99:
    console.log(`O seu IMC:[${imc}], peso normal`);
    break;

  case imc > 25 && imc < 29.99:
    console.log(`O seu IMC:[${imc}], acima do peso`);
    break;

  case imc > 30 && imc < 34.99:
    console.log(`O seu IMC:[${imc}], obesidade I`);
    break;

  case imc > 35 && imc < 39.99:
    console.log(`O seu IMC:[${imc}], Obesidade II`);
    break;

  default:
    console.log(`Valor do IMC:[${imc}], alto risco.`);
    break;
}
