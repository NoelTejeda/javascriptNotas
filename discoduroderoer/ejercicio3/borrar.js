const title = document.createElement('h1')
title.textContent ='Hola desde JS textcontent'

document.body.append(title)

const boton= document.createElement("button")
boton.innerText='haz click'
document.body.append(boton)

boton.addEventListener("click",()=>{ 
  title.textContent="texto actualizado"
  alert('se ha modificado el dom')
})


