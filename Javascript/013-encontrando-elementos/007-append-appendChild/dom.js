const container = document.querySelector(".container");

container.append("Olá, Mundo!"); // add textos diretos no corpo do html

const newDiv = document.createElement("div");
newDiv.innerText = "Olá";
container.appendChild(newDiv); // add elementos no corpo do html
