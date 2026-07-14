console.log("¡Hola desde JavaScript! 🚀");

const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
  titulo.textContent = "¡Misión cumplida! 🌌";
  boton.textContent = "¡Lo lograste!";
});
