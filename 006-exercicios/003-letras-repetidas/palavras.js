const palavra = "Paralelepipido de itaquaqcetuba"
  .toLocaleLowerCase()
  .replaceAll(" ", "");
let letras = {};

for (const letra of palavra) {
  if (letras[letra]) {
    letras[letra]++;
  } else {
    letras[letra] = 1;
  }
}

// Ordenar as chaves do objeto em ordem alfabética
const chavesOrdenadas = Object.keys(letras).sort();

// Exibir o objeto no console de forma alfabética
for (let letra of chavesOrdenadas) {
  console.log(`${letra}: ${letras[letra]}`);
}

/* Nesse código, a palavra a ser analisada é "Paralelepipido de itaquaqcetuba". A função toLocaleLowerCase() é utilizada para converter a palavra em letras minúsculas, e o método replaceAll(" ", "") remove os espaços em branco para garantir uma contagem correta.

Em seguida, o loop for percorre cada caractere da palavra e realiza a contagem de ocorrências de cada letra. Se a letra já existir no objeto letras, sua contagem é incrementada. Caso contrário, a letra é adicionada como uma nova chave no objeto com o valor inicial de 1.

Após o loop, o código utiliza Object.keys(letras) para obter as chaves do objeto letras e sort() para ordená-las em ordem alfabética, armazenando o resultado no array chavesOrdenadas.

Por fim, o código utiliza um loop for...of para iterar sobre as chaves ordenadas do objeto e exibe cada letra e sua contagem no console. Assim, o resultado é exibido no console de forma alfabética das letras, mostrando a letra seguida pela sua quantidade de ocorrências. */
