/* 3) Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') 
 devolverá ['hola', 'que', 'tal'].
  */

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn('No ingresaste ninguna cadena de texto')
    : (separador === undefined)
      ? console.warn('No ingresaste el caracter separador')
      : console.info(cadena.split(separador,))

cadenaAArreglo("lorem22", "")

