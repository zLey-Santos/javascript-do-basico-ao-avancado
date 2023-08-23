const h1 = document.querySelector("h1");
h1.style.background = "red";

const classP = document.querySelector(".paragrafo");
classP.style.background = "blue";

const idP = document.querySelector("#paragrafo");
idP.style.background = "red";
idP.style.color = "yellow";

const strong = document.querySelector("strong");
strong.style.background = "yellow";

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = timer;
  timer++;
}, 1000000);
