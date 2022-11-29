const botonInfo = document.querySelector("#btn");
botonInfo.addEventListener("click", () => {
  const alerta = alert("click en el botón");
  //console.log("click en el botón");
});

$(() => {
  $("#btn").click(() => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
