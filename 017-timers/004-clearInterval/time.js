const timer = setInterval(() => {
  console.log("Meu time foi iniciado!"); // A cada 1000 milissegundos (1 segundo), esta função será chamada para imprimir a mensagem no console.
}, 1000);

console.log("Meu console"); // Imprime a mensagem "Meu console" no console imediatamente após a criação do intervalo.

setTimeout(() => {
  clearInterval(timer); // Após 5000 milissegundos (5 segundos), esta função será chamada para interromper o intervalo criado anteriormente.
}, 5000);

/**@abstract
 * Aqui estão os pontos-chave:
     *setInterval é usado para criar um intervalo que chama a função de callback (no caso, uma função que imprime "Meu time foi iniciado!") a cada 1000 milissegundos (1 segundo).
    
    *Logo após a criação do intervalo, a mensagem "Meu console" é impressa no console imediatamente.

    *setTimeout é usado para agendar a execução de uma função após 5000 milissegundos (5 segundos).

    *Dentro da função de setTimeout, clearInterval(timer) é chamado para interromper o intervalo que foi criado com setInterval, garantindo que o código não continue a imprimir a mensagem após 5 segundos.
 */
