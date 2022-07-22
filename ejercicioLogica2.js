/* 2) Programa una función que te devuelva el texto recortado
según el número de caracteres indicados,
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */

function devolver(cadena = "") {
    (!cadena)
        ? console.warn('No ingresaste ninguna cadena de letras')
        : console.info(`la extraccion de "${cadena}" es : ${cadena.substr(0, 4)}`)

}

//devolver('Hola Mundo');

//----------------------------------------------------------------

const recortarTexto = (cadena = "", longitud = undefined) =>
    (!cadena)
        ? console.warn('no ingresaste una cadena de texto')
        : (longitud === undefined)
            ? console.warn('no ingresaste la longitud a recortar el texto')
            : console.info(cadena.slice(0, longitud));

recortarTexto('Hola Mundo', 4)
recortarTexto()
recortarTexto('hola')
