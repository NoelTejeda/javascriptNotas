
const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nameSizes = names.map((e) => e.length);

console.log(nameSizes) ; // Devuelve [3, 5, 5, 9, 9]


//************** otro ejemplo: que multiplique un array por 2

const numeros = [1,2,3,4,5]
const mult = numeros.map(e=>e*2)
console.log(mult)

//es una manera altenativa a un forEach ya que recorre el array
// dentro de la función puede ir cualquier palabra, pero debe ser la misma a la cuál se le colocará lo que queramos hacer.
// map crea un array distinto al original



//************** otro ejemplo: obtener las edades promedio del siguiente arreglo

//podemos agregarle una función que haga la suma con un for:
const suma = (ns) =>{
  let acumulado = 0;
  for (i=0; i<ns.length; i++){
    acumulado += ns [i]
  }
  return acumulado
}


const mascotas = [
  {nombre: 'Puchini', edad: 12, tipo: 'perro' },
  {nombre:'Chanchito feliz', edad:3, tipo:'perro'},
  {nombre:'Pulga', edad: 10, tipo: 'perro'},
  {nombre:'Pelusa', edad: 12, tipo: 'gato'},
  ]

//transformar el arreglo en uno que sea de números, es decir tomamos del array solo las edades
const edades = mascotas.map((e)=>e.edad)
//console.log(edades)


const resultado = suma(edades)
console.log(resultado/edades.length)
