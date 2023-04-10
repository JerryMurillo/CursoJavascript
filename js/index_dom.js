import hamburgerMenu from "./dom/menu_haburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
hamburgerMenu(".panel-btn", ".panel", ".menu a");
});

function reloj(){
  let myFecha = new Date();
  let horas = myFecha.getHours();
  let minutos = myFecha.getMinutes();
  let segundos = myFecha.getSeconds();
  let resultado = (`${horas}:${minutos}:${segundos}`);
  document.getElementById("horaActual").innerHTML = resultado;
  setTimeout(reloj, 1000);
}
reloj()

