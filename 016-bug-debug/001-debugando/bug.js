/**@abstract
 * ***BUG
 *    Um bug é um termo utilizado na programação para descrever um erro,
 *   defeitos ou comportamentos indesejaveis em um software.
 *
 *    Ele ocorre quando o código do programa não se comporta como o esperado
 *   e produz resultados oncorretos, inesperados ou inconsistentes.
 *
 * ***DEBUG
 *    O debug (depuração) é o precesso de identificar, analizar e corrigir bugs
 *  em um programa de computador. Envolve a investigação ea resolção de problemas para entender
 * 	e corrigir o comportamento indesejado do software.
 *
 *    O objetivo do debug é encontrar a causa raiz do bug e corrigi-lo
 *  para garantir que o programa funcione corretamente.
 *
 */

const bugNum = () => {
  const number = "123";
  console.log(number === 123);

  if (number === 123) {
    return "Seu Número é 123 - type Number ";
  }
  console.log(number);
  return "Deu ruim";
};

console.log(bugNum());
