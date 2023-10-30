/* 
Enum: ele nada mais é que um aglutinador de dados.
E esses dados eles são.
Eles podem ser representados com valores específicos e padronizados. 
*/

enum EMes {
  Jan = 1,
  Fev = 2,
  Mar = 3,
  Abr = 4,
  Mai = 5,
  Jun = 6,
}
//console.log("Meses do ano ordenados de 1 a 12", EMes.Abr);

const pessoa: { nome: string; mesAniversario: number } = {
  nome: "zLey",
  mesAniversario: EMes.Jan,
};

if (pessoa.mesAniversario === EMes.Jan) {
  console.log(
    "Feliz aniversario",
    pessoa.nome,
    "dia é 08 do",
    pessoa.mesAniversario
  );
}
