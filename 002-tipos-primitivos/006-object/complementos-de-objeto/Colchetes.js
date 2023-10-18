let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

console.log(user.age);
/* // Forma de acessar as key declarados como string são:
// set
user["likes birds"] = true;

//get
//alert(user["likes birds"]);

//delete
delete user["likes birds"];

console.log(user["likes birds"]);
birds";
user[key] = true */

let key = "likes birds";

user[key] = true;
console.log(`"valor chamdo pela key ", ${user[key]} (verdadeiro)`);

// caso usamos essa syntax o resultado retornara undefined
console.log(user.key); // undefined
