/*
Escopo:
Determina quais partes do código podem acessar uma determinada variável.
*/

let num = 123;
console.log(num); // Retorna 123, pois está em escopo global.

{
  console.log(num); // Retorna 123, pois a variável "num" está acessível no escopo externo.
}

{
  let text = "Santos";
  console.log(text); // Retorna "Santos", pois estamos acessando dentro do seu próprio escopo..
}

console.log(text); // Retorna um erro, pois a variável "text" foi declarada dentro de um escopo e não é acessível fora dele.

/*  O escopo define quais partes do código podem acessar uma variável e se essa variável está disponível dentro ou fora de um determinado escopo. */
