const mes = 17;

switch (mes) {
  case 1:
    console.log("janeiro");
    break;

  case 2:
    console.log("fevereiro");
    break;

  case 3:
    console.log("março");
    break;

  case 4:
    console.log("abril");
    break;

  case 5:
    console.log("maio");
    break;

  case 6:
    console.log("junho");
    break;

  case 7:
    console.log("julho");
    break;

  case 8:
    console.log("agosto");
    break;

  case 9:
    console.log("setembro");
    break;

  case 10:
    console.log("outubro");
    break;

  case 11:
    console.log("novembro");
    break;

  case 12:
    console.log("dezembro");
    break;

  default:
    console.log(`${mes} não encontrado!`);
    break;
}

/* 
O switch é uma estrutura de controle de fluxo em JavaScript que permite executar diferentes ações com base em uma expressão. Ele avalia a expressão e, em seguida, verifica cada case em busca de uma correspondência. Quando uma correspondência é encontrada, o código dentro desse case é executado. O break é utilizado para sair do switch e impedir que os cases subsequentes sejam executados.

No exemplo acima, a expressão avaliada é a variável mes, que contém o valor 3. O switch verifica cada case em busca de uma correspondência com o valor de mes. Quando o case com valor 3 é encontrado, o código dentro desse case é executado e imprime "março" no console.

Se não houver uma correspondência nos cases anteriores, o código dentro do bloco default será executado. Nesse caso, o código imprime ${mes} não encontrado, onde ${mes} representa o valor de mes que não corresponde a nenhum dos cases definidos.

O switch é útil quando você tem várias condições a serem verificadas em relação a uma única expressão e deseja executar diferentes blocos de código com base nessa expressão. Ele é uma alternativa mais legível e concisa do que encadear vários blocos de if-else if-else..
 */
