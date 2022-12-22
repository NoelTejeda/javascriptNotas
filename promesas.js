(function () {
  function getUsers(){

    // crear una promesa
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('Users are Ready');
        resolve();
      }, 800);    
    })
}

function getProjects(){
  // crear una promesa
  return new Promise(function(resolve, reject)  {
    setTimeout(function(){
      console.log('Projects are Ready');
      //resolve();  
      reject();
      }, 400);    
    })
}

function getIssues(){
    // crear una promesa
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        console.log('Issues are Ready');
        resolve();
      }, 700);    
    })
}

getUsers()
.then(getProjects)
.then(getIssues)
//mostrar mejor con un modal el error
.catch(function( err ){
  console.error("error intente más tarde!");
});
//NOTA:NOOO COLOCAR ; DESPUÉS DE LOS THEN. ARROJA ERROR., 

}) 
();

/* 
como se está manejando el timpo con setTimeout simulando petición a una api, el resultado no será asincrono sino que será asincrono:
Project are ready
Issues are ready
Users are ready

la manera de que se ejecute con el orden que queramos es usando .then (después) y meter entre parentesis lo que queremos que se ejecute
después. ( en el ejemplo se hace de forma anidada)

 */

/* 
https://www.youtube.com/watch?v=9im-5iDgH54

** hola, muy buen video, felicidades!!! y gracias, cuando recomiendas utilizar promesas y cuando observables???

las promesas cuando sólo tengas que controlar acciones de un "solo llamado" (por ej. los llamados AJAX) y sólo te interese saber si termina con éxito o con error. Los Observables cuando se trate de flujos asíncronos de datos (no sólo de una vez), por ejemplo cuando tenemos aplicaciones de tiempo real con algo como web sockets, los observables son mejores ya que "dejan abierto" un canal por el que podemos estar recibiendo información
----------------------------------------

Hola Alex, una promesa seria lo mismo que al hacer un ajax... usando el metodo done en jQuery?

Una promesa representa "una operación" que eventualmente va a ser completada con éxito o con error. Las promesas sirven para sincronizar cosas asíncronas. En ese sentido una promesa es similar a los objetos Deferred que un llamado a $.ajax( ) regresa. De hecho los objetos Deferred son compatibles con el estándar Promise A+, por lo tanto pueden usarse juntos.
---------------------------------------

cual es la diferencia entre ajax los operadores async y await y las promesas?  En que caso debo usar cada uno de estos?  Entendiendo las promesas no es necesario aprender el resto?  Un saludo.

async y await son operadores que nos permiten trabajar con código asíncrono como si fuera código secuencial, ya que muchas veces puede ser confuso trabajar con Promesas, al final async/await sólo es "syntatic sugar" de las Promesas. Saludos.

---------------------------------------

que patrón o estructura es (function(){})();  cuando hay que usarla?

ese patrón se llama IIFE = Immediately Invoked Function Expression, y debería ser utilizado para todo código que vaya a ejecutarse exclusivamente en los navegadores web. Entre las ventajas que tiene una IIFE están:

1) Genera algo que se conoce como "isolated scope" o lo que es lo mismo un alcance aislado, quiere decir que las funciones y variables que declares dentro NO generarán conflictos con otro código en otra IIFE.

2) Evita que el scope global (window) sea contaminado con variables y funciones.

3) Evita conflictos con bibliotecas que usan los mismos símbolos por ejemplo jQuery y Mootools.



 */