// Declaração de um objeto chamado "tenisII" com várias propriedades
const tenisII = {
  tamanho: 40,
  estoque: true,
  marca: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 12345,
  n: 5,
  link: { a: "a é = a", b: { z: "z é = z " } },
};

// Verifica se o objeto "tenisII" possui a propriedade "marca"
// Se a propriedade "marca" existir, a variável "verificador" receberá a string "Sim existe"
// Caso contrário, a variável "verificador" receberá a string "Não existe"
const verificador = tenisII.hasOwnProperty("marca")
  ? "Sim existe"
  : "Não existe";

// Imprime o resultado da verificação
console.log(verificador);

// Verifica se o objeto "tenisII" possui a propriedade "tamanho"
// A função hasOwnProperty() retorna true se a propriedade existir e false caso contrário
console.log(tenisII.hasOwnProperty("tamanho"));

// Verifica se a propriedade "tamanho" está presente no objeto "tenisII"
// A expressão "tamanho" in tenisII retorna true se a propriedade existir e false caso contrário
console.log("tamanho" in tenisII);
