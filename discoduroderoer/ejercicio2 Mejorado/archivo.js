const spanResultadoCuenta = document.getElementById('spanResultado')
var numUno = document.getElementById('num_uno');
var numDos = document.getElementById('num_dos');
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnMultiplicar = document.getElementById('multiplicar');
const btnDividir = document.getElementById('dividir');
var resultado = 0;

btnSumar.addEventListener('click', () => {

  spanResultadoCuenta.textContent = Number(numUno.value) + Number(numDos.value);

})
btnRestar.addEventListener('click', () => {

  spanResultadoCuenta.textContent = Number(numUno.value) - Number(numDos.value);

})
btnMultiplicar.addEventListener('click', () => {

  spanResultadoCuenta.textContent = Number(numUno.value) * Number(numDos.value);

})
btnDividir.addEventListener('click', () => {

  spanResultadoCuenta.textContent = Number(numUno.value) / Number(numDos.value);

})