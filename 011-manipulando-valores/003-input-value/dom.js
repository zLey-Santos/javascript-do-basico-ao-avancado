const input = document.querySelector("#name");

console.log(input.value);

setTimeout(() => {
  input.value = "Wesley";
  console.log(input.value);
}, 3000);
//
