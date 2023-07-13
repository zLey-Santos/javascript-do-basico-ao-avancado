let user1 = new Object(); // 'Object constructor' syntax
let user2 = {}; // 'Object literal' syntax

// object
let user3 = {
  pessoa1: {
    name: "Wesley", // by key 'name' store value 'Wesley'
    age: 30, // by key 'age' store value  30

    status: {
      altura: 1.85,
      cabelo: "castanho escuro",
    },
  },

  pessoa2: {
    name: "luana",
    age: 30,
  },
  sexo: {
    mulher: true,
  },
  status2: {
    altura: 1.73,
    corDosCabelos: "preto",
  },
};

// retona sexo: mulher (verdadeiro)
console.log(user3.sexo);

// retorarna undefined
delete user3.sexo;
delete user3.status2;
console.log(user3.sexo); // retorna undefined se a chamada for para user3,sexo ou user3.status2
