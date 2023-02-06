
const nombre1 = document.getElementById("nom");
document.getElementById("nom").focus();
const lugar = document.getElementById("lugar");
const boton_enviar = document.getElementById("enviar");
const boton_borrar = document.getElementById("borrar");
const textarea = document.getElementById("textarea");
const fileInput = document.getElementById("file");
const fileText = document.getElementById("url");

fileInput.addEventListener("change", function() {
  fileText.value = fileInput.files[0].name;
});


boton_enviar.addEventListener('click', enviar);
boton_borrar.addEventListener('click', borrar);


function enviar(){
    textarea.value = "Archivo: " + fileText.value + "\nEnviado desde: " + lugar.value +" para " + nombre1.value + "." + "\n\nGracías por el envío.";
}


function borrar(){
    nombre1.value = "";
    fileText.value = "";
    textarea.value = "";
}