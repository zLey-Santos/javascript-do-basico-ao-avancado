let carro = {
  cv: 250,
  estoque: true,
};

carro.cv = 350;
carro.estoque = false;
carro.preco = 75000;
carro["preco"] = 80000;
console.log(carro["preco"]);

delete carro.cv;
// podemos deletar valores de um obj....

console.log(carro.cv, carro.estoque);
