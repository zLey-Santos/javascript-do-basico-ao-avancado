const timer = setTimeout(() => {
  console.log("Meu time foi iniciado!");
}, 1000);

console.log("Meu Console");

clearTimeout(timer);
