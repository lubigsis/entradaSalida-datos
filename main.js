//Ejercicio 1 de entrada y salida de datos

//le agrego un evento al boton corfirmar p/que cuando se lo clickee me obtenga los valores
//ingresados por el user y me escriba un texto HTML.

document.getElementById('botonJS').addEventListener('click', function(){
    let nombre = document.getElementById('nombreJS').value;
    let edad = document.getElementById('edadJS').value;

    document.getElementById('salidaJS').innerHTML= `Hola ${nombre}, bravo por tus ${edad} años!`;
});