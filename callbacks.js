/* 
function primero(){
  console.log("primero");
}
function segundo(){
  console.log("segundo");
}

primero()
segundo()

la salida seria:
primero
segundo

ahora usando callbacks simulando con setTimeout:
*/

function primero(segundo){
  setTimeout(function(){
    console.log("primero");
    segundo();
  }, 3000);
}
function segundo(){
  console.log("segundo");
}

primero(segundo);





/* 
Js es un lenguaje interpretado esto quiere decir que los códigos se leen de arriba hasta abajo. y el resultado a ejecutar se devuelve inmediatamente.

los callbacks son funciones que se pasan a otra funcion como un argumento, y luego se invoca dentro de 
una función externa para completar alguna rutina.

setTimeout tienen 2 parametros: el primero es una función y el segundo es un valor (tiempo) expresado en milisegundo (3 seg == 3000 ms)


*/