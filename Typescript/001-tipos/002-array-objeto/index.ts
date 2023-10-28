let arr: [string, string, number, boolean] = [
  "zLey-Santos",
  "zLey-Santos",
  123,
  true,
];

let arr2: Array<string | number | boolean> = ["Olá", "Mundo", true, "zLey", 31];

console.log(arr[2], arr2[3]);

let obj: { nome: string; sobrenome: string; idade: number; deuBom: boolean } = {
  nome: "zLey",
  sobrenome: "Santos",
  idade: 31,
  deuBom: true,
};

console.log("Objeto", obj);

let obj1: Array<{
  id: number;
  nome: string;
  sobrenome: string;
  idade: number;
  deuBom: boolean;
}> = [
  {
    id: 1,
    nome: "zLey",
    sobrenome: "Santos",
    idade: 31,
    deuBom: true,
  },
];

console.log(obj1);
