function tenis(tamnaho, estoque, preco) {
  return {
    tamnaho,
    estoque,
    preco,
  };
}

tenis.estoque = true;
tenis.tamnaho = [38, 39, 40];
tenis.preco = `${129}€`;

let estoque = tenis.estoque === true ? "Disponivel" : "Indisponivel";

console.log(tenis(tenis.tamnaho, estoque, tenis.preco));

console.log("_______________________________________");

const tenisII = {
  getTamanho() {
    return 39;
  },
  getEstoque() {
    return false;
  },
};

const stoc = tenisII.getEstoque() === true ? "Dispo... " : " Indsp...";
console.log("Estoque:", stoc, "Número:", tenisII.getTamanho());
