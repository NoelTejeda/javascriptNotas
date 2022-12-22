// escuchar el click en el boton
// preguntar y guardar el nombre al usuario
// insertar el nombre donde ahora estan los ...

const BOTON = document.getElementById("boton")


// escuchar el boton
BOTON.addEventListener("click", preguntarNombre )


const h1 =document.getElementById("h1")
const h2 =document.getElementById("h2")

function preguntarNombre() {
  const NOMBRE = prompt("Introduce tu nombre")
  mostrarNombre(NOMBRE)
}

function mostrarNombre(NOMBRE){
  h1.textContent = NOMBRE;
  h2.textContent = "Hola!!" ;
}
