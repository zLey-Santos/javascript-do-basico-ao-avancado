/* 
unshift = add item no inicio do arrya
push = add item no fim do array
*/

let arr = [1, 2, 3, 4, 5];
console.log("Primeiro:", ...arr);

arr[5] = 6; // add elemento no final menos usado menos convencional

arr.unshift(true); // add um elemento, valor no inicio do array
console.log("segundo:", ...arr);

arr.push("limão"); // add um elemento valor no fim do array
console.log("terceiro:", ...arr);
