// condição ? true : falsy

const velociade = 0; // altere o valor para maior ou menos para verificar cada condição.
const notification = 85;

const condicao =
  velociade > notification
    ? console.log(`Velociadade ${velociade}Km/h [MULTADO!!!]`)
    : console.log(` velociadade atual de ${velociade}Km/h, [ Boa viagem! ]`);

/* 
    
    O operador ternário ? : é uma forma concisa de escrever uma estrutura condicional em JavaScript. Ele avalia uma condição e retorna um valor com base nessa condição.

No exemplo acima, a condição verificada é velocidade >= warn. Se essa condição for verdadeira (a velocidade excede ou é igual ao limite), o primeiro bloco de código será executado. Caso contrário, se a condição for falsa (a velocidade está abaixo do limite), o segundo bloco de código será executado.

Se a condição for verdadeira, o código dentro do primeiro bloco será executado e imprimirá a mensagem:

"Excedeu o limite de velocidade de 75Km/h, velocidade atual de [velocidade]Km/h [MULTADO!!!]"

Se a condição for falsa, o código dentro do segundo bloco será executado e imprimirá a mensagem:

"Velocidade atual de [velocidade]Km/h, [Boa viagem!]"

A variável condicao recebe o valor retornado pelo operador ternário, mas neste caso em particular, o valor retornado não é relevante, pois os valores impressos no console são os principais resultados desse código.

Em resumo, o operador ternário ? : permite que você avalie uma condição e retorne um valor com base nessa condição, tornando a estrutura condicional mais concisa e fácil de ler.
    
    */
