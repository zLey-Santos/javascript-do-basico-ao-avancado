let frutas = ["Banana", "Uva", "laranja"];

frutas[3] = "Maça";
console.log(frutas[2]); // Laranja
console.log(frutas[1]); // Uva
console.log(frutas[0]); // Banana
console.log(frutas[3]); // Adiciona uma propriedade na 3ª possição
console.log("Somos a familia de", frutas.length, "propriedades"); // Exibe quantos elementos tem na matrix do array
console.log("Agora somos uma salada completa", frutas); // Exibe a matriz completa do array

console.log("_______________________________");

let fruta = ["goiaba", "laranja", "ameixa"];
console.log(fruta[fruta.length - 1]); // ameixa

console.log(fruta.at(-1)); // Retorna o elemento final da matriz de arr
fruta.pop(); // Removel o último elemento ameixa
fruta.push("pera"); // Adiciona um elemento no final da matriz
console.log(fruta); // Exibe o novo array
console.log(fruta.at());
