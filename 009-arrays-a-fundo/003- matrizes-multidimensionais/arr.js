// Matrizes Multidimensionais

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ],
];

//console.log(arr[1][0]); // O Primeiro [vertical] acessa o índice na vertical o segundo [horizontal] acessa o indice da horizontal.
console.table(arr);
console.table(arr[3]);

console.log(1, arr[3][1][1]);
console.log(2, arr[2][1]);
