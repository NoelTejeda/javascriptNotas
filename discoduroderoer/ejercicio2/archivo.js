function sumar() {
  let campo1 = Number(document.getElementById('campo1').value);
  let campo2 = Number(document.getElementById('campo2').value);

  let resultado=campo1+campo2
  document.getElementById("resultado").value = resultado;
}
