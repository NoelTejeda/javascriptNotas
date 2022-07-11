// extraer de la siguiente cadena el valor: Apple

let str = "Apple, Kiwi, Strawnberry"
let x = str.substr(0, 5)
console.log(x);

/* 
la diferencia  slice, substr, substring:

slice: (start,end) cuenta desde cero - hasta la cantidad que quiera extraer, continua con la numeración que se trae
        desde el primer caracter. acepta números negativos. 

substring: al igual que slice, pero no acepta números negativos.

substr: (start, longitud) cuenta desde cero - y al llegar a la palabra a extraer, se empieza a contar desde 1 la longitud de la 
        misma.; si no se coloca longitud, extraerá hasta el final del string.
 */