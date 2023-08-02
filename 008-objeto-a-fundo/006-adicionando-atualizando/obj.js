let carro = {
  cv: 250,
  estoque: true,
};

carro.cv = 350;
carro.estoque = false;
carro.preco = 75000;
carro["preco"] = 80000;
console.log(carro["preco"]);

// podemos remover e editar valores de um objeto
