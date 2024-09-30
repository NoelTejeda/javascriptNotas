const frutas = ["manzana", "banana", "naranja", "pera"]

if (frutas.includes("banana")) {
  console.log("La banana está en la lista de frutas.")
} else {
  console.log("La banana no está en la lista de frutas.")
}

/* 
includes(): Determina si una cadena de texto
puede encontrarse dentro de otra cadena. 

el método includes en un array devuelve un valor 
booleano, indicando si un elemento está presente
en el array, para realizar acciones basada en la 
presencia de un elemento se puede usar un if para
manejar ambos casos.

*/