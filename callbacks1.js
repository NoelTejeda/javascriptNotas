function buscar (dni, callback){
  setTimeout(() => {
    callback("Noel")
  }, 2000);
}

buscar("14680111", (nombre)=>{
  console.log(nombre);
})

for (let i = 0; i < 10; i++) {
console.log(`${i} * ${5} = ${i * 5}`);  
}

