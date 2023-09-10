function validarEdad(){
    var edad = document.getElementById('edad').value;
    if(edad < 1 || edad > 130){
alert("Ingrese una edad correcta");
    } else {
    if(edad < 18){
        alert("Usted es menor de edad");

    } else{
        alert ("Usted es mayor de edad");
    }
}
}