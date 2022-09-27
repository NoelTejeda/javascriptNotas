function muestraOpcion() {

  var opciones = document.getElementsById("eleccion");
  console.log(opciones);
  for (let i = 0; i < opciones.length; i++) {

    if (opciones[i].checked) {
      alert(opciones[i].value);
    }

  }
}