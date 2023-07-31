/* 
O strict mode elimina alguns erros silenciosos que passarian batidos no javascript e os emitir erros.

Além disso, essa forma corrige alguns erros que tornam o javascript difícil
de ser otimizado, então algumsl vezes os códigos no modo estrito rodam masi otimozados e velozes do que os codigos no 'modo normal '
link: www.geeksforgeeks,org/stric-mode-javascript/
*/

"use strict";

(() => {
  let test = "teste";
  console.log(test);
})();
