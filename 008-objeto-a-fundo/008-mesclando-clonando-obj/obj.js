let tenis = {
  tamanho: 40,
  estoque: true,
};

let link = { link: { a: "A", b: { c: "C" } } };

let clone1 = JSON.stringify(tenis); // clone dizemos que nosso obj é igual nosso obj
clone1 = JSON.parse(clone1);

clone1.estoque = false;

console.log(1, clone1);
console.log(2, tenis);

// let mesclar1 = Object.assign(tenis, link); // podemos mesclar unir dessa forma com assign() quer dizer junte esses valores
// let mesclar2 = { ...tenis, ...link }; // spreeds operator com destruturação

// mesclar1.link.a = "ABC";

// console.log(3, clone1);
// console.log(4, tenis);
// console.log(5, mesclar1);
// console.log(6, mesclar2);
