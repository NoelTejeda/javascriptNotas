// Use the slice method to return the word "bananas".

let txt = "yo puedo comer bananas todo el dia";
//let x = txt.slice(15, 22);
let x = txt.slice(-19, -12) // si lo coloco en negativo empiezo a contar desde el final del string
console.log(x);

/* 
Nota: se empiza a contar desde cero la cantidad de letras que se quiera extraer, 

** método slice ** 
se empiza a contar desde cero
termina pero no se incluye al contar, hay contar uno más.(ver en el ejemplo)

colocar el final es opcional; si no se coloca imprimirá todo hasta el final

slice (start, end)

 */


/* 

Metodos String:

* length
* slice (start, end)
* substring (start, end) == slice con la diferencia no acepta numeros negativos
* substr(start, end)  == slice con la diferencia (start, longitud) empieza y la cantidad de caracteres a imprimir. sino definimos hasta
                            donde, imprimirá hasta el final.

*/