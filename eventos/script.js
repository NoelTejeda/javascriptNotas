/* 
https://www.youtube.com/watch?v=Up67WpXIy70
https://www.youtube.com/watch?v=UVPnw_APpAk

**eventos de raton:***
  **click**: cuando pulsamos el botón izquierdo del ratón.
  **dblclick**: cuando pulsamos dos veces seguidas el botón izquierdo del ratón.
  **mouseenter**: cuando entramos en la zona que tiene el evento.
  **mouseleave**: cuando salimos de la zona que tiene el evento
  **mousedown**:  cuando pulsamos y no soltamos el boton izquierdo del ratón.
  **mouseup**: cuando soltamos el boton izquierdo del ratón
  **mousemove**: cuando movemos el ratón.

**Eventos de teclado**
  **keydown**: cuando pulsamos una tecla
  **keyup**: cuando soltamos una tecla
  **keypress**: cuando pulsamos una tecla y no la soltamos  
 */

//unclick
const prueba= document.getElementById('click')
prueba.addEventListener("click", ()=>{
  console.log('Esto es un click');
})

//dobleclick
const dobleclick= document.getElementById('dobleclick')
dobleclick.addEventListener("dblclick" , ()=>{
  console.log('Esto es dobleclick');
})

//mouseenter
box.addEventListener('mouseenter',()=>{
  box.style.background="green"
})
//mouseleave
box.addEventListener('mouseleave',()=>{
  box.style.background="yellow"
})
//mousedown
box.addEventListener('mousedown',()=>{
console.log("haz pulsado en la caja");
})
//mouseup
box.addEventListener('mouseup',()=>{
  console.log("haz soltado el boton en la caja");
})
//mousemove
box.addEventListener('mousemove',()=>{
  console.log("haz movido el mouse");
})

//keydown
key.addEventListener('keydown',()=>{
  console.log('has pulsado una tecla');
})
//keyup
key.addEventListener('keyup',()=>{
  console.log('has soltado una tecla');
})
//keypress
key.addEventListener('keypress',()=>{
  console.log('estas pulsando una tecla');
})

/* el motivo de los key es saber que tecla hemos pulsado y 
para eso se usa el objeto evento (e)*/

key.addEventListener('keyup',(e)=>{
  console.log(e);
})