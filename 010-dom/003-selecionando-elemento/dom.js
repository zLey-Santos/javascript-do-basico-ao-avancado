const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((element, index) => {
  element.style.color = "#FFF";
  element.style.padding = "12px";
  element.style.borderRadius = "12px";

  if (index === 0) {
    element.style.background = "blue";
  }
  if (index === 1) {
    element.style.background = "red";
  }
  console.log("indice ", index, "elemento ", element);
});
