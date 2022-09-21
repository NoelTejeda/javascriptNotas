const BOTON = document.getElementById("boton")

BOTON.addEventListener("click", addNombre)

const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')

function addNombre (){
  const pregunNombre = prompt('Hola dime tu nombre')
  tipeNombre(pregunNombre);
}

function tipeNombre(pregunNombre){
  h1.textContent = pregunNombre;
  h2.textContent = "HOla!!!";
}
