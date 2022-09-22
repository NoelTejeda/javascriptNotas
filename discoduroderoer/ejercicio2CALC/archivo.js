let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
const BTNSUMAR = document.getElementById('sumar')
const BTNRESTAR = document.getElementById('restar')
const BTNDIVIDIR = document.getElementById('dividir')
const BTNMULTIPLICAR = document.getElementById('multiplicar')
const RESULTADO = document.getElementById('resultado')

BTNSUMAR.addEventListener("click", ()=>{
  RESULTADO.innerHTML=Number(num1.value)+Number(num2.value)
})
BTNRESTAR.addEventListener("click", ()=>{
  RESULTADO.innerHTML=Number(num1.value)-Number(num2.value)
})
BTNDIVIDIR.addEventListener("click", ()=>{
  RESULTADO.innerHTML=Number(num1.value)/Number(num2.value)
})
BTNMULTIPLICAR.addEventListener("click", ()=>{
  RESULTADO.innerHTML=Number(num1.value)*Number(num2.value)
})


