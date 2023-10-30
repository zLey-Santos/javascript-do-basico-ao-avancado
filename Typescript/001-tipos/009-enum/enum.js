/*
Enum: ele nada mais é que um aglutinador de dados.
E esses dados eles são.
Eles podem ser representados com valores específicos e padronizados.
*/
var EMes;
(function (EMes) {
    EMes[EMes["Jan"] = 1] = "Jan";
    EMes[EMes["Fev"] = 2] = "Fev";
    EMes[EMes["Mar"] = 3] = "Mar";
    EMes[EMes["Abr"] = 4] = "Abr";
    EMes[EMes["Mai"] = 5] = "Mai";
    EMes[EMes["Jun"] = 6] = "Jun";
})(EMes || (EMes = {}));
//console.log("Meses do ano ordenados de 1 a 12", EMes.Abr);
var pessoa = {
    nome: "zLey",
    mesAniversario: EMes.Jan,
};
if (pessoa.mesAniversario === EMes.Jan) {
    console.log("Feliz aniversario", pessoa.nome, "dia é 08 do", pessoa.mesAniversario);
}
