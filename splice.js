// Use the splice() method to remove "Orange" and "Apple" from fruits.

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(1, 2);
fruits.splice(2, 2, "aguacate")
console.log(fruits);


/*
 splice se usa para agregar o eliminar elementos del array; su sintaxis es:

 agregar:
 fruits.splice(2,0,"pera")
 en la posición 2 del array agrega a pera. se coloca el cero para indicar que no se quiere eliminar.
 [ 'Banana', 'Orange', 'aguacate', 'Apple', 'Kiwi' ]

 reemplazar:
 fruits.splice(2,1,"aguacate")
reemplaza la posición 2 pera apple por pera.
1 es el primer elemento
[ 'Banana', 'Orange', 'aguacate', 'Kiwi' ]


elimina:
fruits.splice(origen,cantidad_eliminar)
fruits.splice(2,1)
como se empieza a contar desde cero, el segundo elemento seria apple, y apartir de allí contar 1, que seria la misma apple.
el resultado seria: [ 'Banana', 'Orange', 'Kiwi' ]




slice no modifica el array original.(no hay mutación)
splice SI modifica el array original.(hay mutación)
 

*/