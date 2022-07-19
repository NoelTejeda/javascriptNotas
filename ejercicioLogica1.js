// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// si el usuario no manda nada, que le asigne un string vacio

contarletras("Noel");
function contarletras(cadena = "") {
    if (!cadena) {
        console.warn('No ingresaste ninguna cadena de letras')
    } else {
        console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)
    }
}




// ---------------------------------------------
/* 
el problema con esta función es que como es una función expresada, no podré llamarla antes de haberse creado. de tal manera que
como buena práctica considero que es mejor realizarla con una función declaradas, ya que esta se puede llamar antes de haberse creado. 
*/
/* 
const contarLetras = (cadena = "") =>
    (!cadena)
        ? console.warn('No ingresaste ninguna cadena de letras')
        : console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)

contarLetras('')
contarLetras('Noel')
 */

/* 
el operador ternario es una sola linea, por ende es una sola instrucción
cuando la función solo tiene una sola instrucción se le pueden omitir las llaves. */