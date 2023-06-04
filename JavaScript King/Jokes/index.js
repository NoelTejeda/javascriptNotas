const btnEl=document.getElementById("btn")
const jokeEl=document.getElementById("joke")

const apiKey = "37zribrffJJ/Du2mVNv69Q==ezBSUfeFX2bQNrCq"

const apiUrl= "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const options = {
  method: "GET",
  headers:{
    'X-Api-Key': apiKey,
  }
}

async function getJoke(){

  try {
    jokeEl.innerText='cargando...'

    /*deshabilita el boton y agrega texto al boton */
    btnEl.disabled=true
    btnEl.innerText='cargando'
    
    const response = await fetch(apiUrl, options)
    const data =  await response.json()
    
    /*habilita el boton y agrega texto al boton */
    btnEl.disabled=false
    btnEl.innerText='Quiero un chiste'
    
    jokeEl.innerText=data[0].joke
    
  } catch (error) {
    jokeEl.innerText='A ocurrido un Error, Intenta más tarde'
    /*habilita el boton y agrega texto al boton */
    btnEl.disabled=false
    btnEl.innerText='Quiero un chiste'
    console.log(error)
  }


}

btnEl.addEventListener("click",getJoke)


/* la llave de la api la proporciona la página api ninjas una vez logueado */

/*
addEventListener 
es un evento de escucha al elemento(btnEl) 

Sí, en lugar de `"click"`, puedes usar otros tipos de eventos para agregar un evento de escucha a un elemento. Algunos ejemplos de eventos comunes incluyen `"mouseover"`, `"keydown"`, `"keyup"`, `"submit"`, `"change"`, entre otros. El tipo de evento que elijas depende de la acción que desees que el usuario realice para activar la función. Por ejemplo, si deseas que la función se ejecute cuando el usuario mueva el mouse sobre el elemento `btnEl`, puedes usar el evento `"mouseover"` de la siguiente manera:

btnEl.addEventListener("mouseover", getJoke);

*/