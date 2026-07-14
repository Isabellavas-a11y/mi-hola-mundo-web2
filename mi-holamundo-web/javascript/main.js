console.log("Hola ");

const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
  titulo.textContent = "hola 🌌";
  boton.textContent = "hola";
});
