/* 
Uma closure ocorre normalmente quando uma função 
é declarada dentro do corpo de outra, e a função interior 
referencia variáveis locais da função exterior..
*/

// Função QualSeuNome recebe um parâmetro 'name'
function QualSeuNome(name, sobreName) {
  // Declara uma constante 'msg' com uma string que contém parte da mensagem
  const msg = `O seu nome é:`;

  // Declara uma função interna chamada 'SeuNome'
  function SeuNome() {
    // A função 'SeuNome' retorna uma string que concatena 'msg' com o parâmetro 'name'
    return `${msg} ${name + "_" + sobreName} `;
  }

  // Retorna o resultado da chamada da função interna 'SeuNome'
  return SeuNome();
}

// Chamada da função 'QualSeuNome' com o argumento "zLey"
console.log(QualSeuNome("zLey", "Santos"));

/* 
  Aqui está uma explicação do funcionamento do código acima:

    A função QualSeuNome(name) é declarada e recebe um parâmetro name.

    Uma constante msg é declarada dentro da função QualSeuNome, contendo a mensagem "O seu nome é:".

    É declarada uma função interna chamada SeuNome(), que não recebe nenhum parâmetro. Essa função interna é conhecida como um "closure" porque tem acesso à variável msg e ao parâmetro name da função externa QualSeuNome, mesmo após a função externa ter sido executada.

    Dentro da função SeuNome(), uma string é construída utilizando a variável msg e o parâmetro name. Ela concatena a mensagem com o nome fornecido.

    Em seguida, a função QualSeuNome() retorna o resultado da chamada da função interna SeuNome(). Isso significa que o resultado da concatenação é retornado diretamente como resultado da função QualSeuNome(name).

    Finalmente, a função QualSeuNome("zLey") é chamada passando o argumento "zLey". Isso aciona toda a cadeia de execução, e a função interna SeuNome() é chamada, retornando a string resultante da concatenação da mensagem com o nome "zLey".

    O resultado é impresso no console através do console.log, exibindo: "O seu nome é: zLey".
*/

// A função 'calculadora' recebe dois parâmetros numéricos: num1 e num2.
function calculadora(num1, num2) {
  // Declara uma constante 'msg' que será utilizada nas operações para formar as mensagens.
  const msg = "Resultado:";

  // Define uma função de soma que retorna uma string com a mensagem de soma e o resultado da operação.
  const soma = () => {
    return `${msg} da soma entre: ${num1} + ${num2} =  ${num1 + num2}`;
  };

  // Define uma função de subtração que retorna uma string com a mensagem de subtração e o resultado da operação.
  const subtracao = () => {
    return `${msg} da subtração entre ${num1} - ${num2} = ${num1 - num2}`;
  };

  // Define uma função de divisão que retorna uma string com a mensagem de divisão e o resultado da operação.
  const divisao = () => {
    return `${msg} da divisão entre ${num1} / ${num2} = ${num1 / num2}`;
  };

  // Define uma função de multiplicação que retorna uma string com a mensagem de multiplicação e o resultado da operação.
  const multiplicacao = () => {
    return `${msg} da multiplicação entre ${num1} * ${num2} = ${num1 * num2}`;
  };

  // Retorna um objeto contendo os resultados das operações, cada um armazenado em uma propriedade do objeto.
  return {
    soma: soma(), // Chama a função soma e armazena seu resultado na propriedade 'soma'.
    subtracao: subtracao(), // Chama a função subtracao e armazena seu resultado na propriedade 'subtracao'.
    divisao: divisao(), // Chama a função divisao e armazena seu resultado na propriedade 'divisao'.
    multiplicacao: multiplicacao(), // Chama a função multiplicacao e armazena seu resultado na propriedade 'multiplicacao'.
  };
}

// Chama a função 'calculadora' passando os argumentos 50 e 2 e armazena o resultado em uma variável.
const resultado = calculadora(50, 2);

// Exibe os resultados das operações através do console.log.
console.log(resultado); // O objeto 'resultado' terá as propriedades 'soma', 'subtracao', 'divisao' e 'multiplicacao'.

// Exemplo de como acessar apenas o resultado da soma a partir do objeto retornado pela função calculadora.
console.log(resultado.soma); // Imprime o resultado da soma: "Resultado da soma entre: 50 + 2 = 52"
