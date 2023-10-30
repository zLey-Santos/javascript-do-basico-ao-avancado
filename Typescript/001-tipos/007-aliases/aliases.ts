// Definindo um novo tipo chamado 'alphanumeric' (um aliases) que pode ser string, number ou boolean.
type alphanumeric = string | number | boolean;

// Declarando duas variáveis do tipo 'alphanumeric'.
let dados: alphanumeric;
let dados2: alphanumeric;

// Atribuindo um valor numérico à variável 'dados'.
dados = 1;

// Atribuindo uma string à variável 'dados'.
dados = "zLey";

// A linha abaixo está comentada, pois tenta atribuir um valor booleano à variável 'dados', o que não é permitido pelo tipo 'alphanumeric'.
// dados = true;

// Atribuindo um valor numérico à variável 'dados2'.
dados2 = 2;

// Atribuindo uma string à variável 'dados2'.
dados2 = "Santos";

// Atribuindo um valor booleano à variável 'dados2'.
dados2 = false;
