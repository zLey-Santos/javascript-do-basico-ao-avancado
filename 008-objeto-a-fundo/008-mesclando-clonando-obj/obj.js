let tenis = {
  tamanho: 40,
  estoque: true,
};

let link = { link: { a: "A", b: { c: "C" } } };

let clone1 = tenis; // clone dizemos que nosso obj é igual nosso obj
console.log(clone1);

let mesclar1 = Object.assign(tenis, link); // podemos mesclar unir dessa forma com assign() quer dizer junte esses valores
console.log(mesclar1);

let mesclar2 = { ...tenis, ...link }; // spreeds operator com destruturação
console.log(mesclar2);
