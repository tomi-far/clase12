function saludo(){
    let nombre = prompt ("Ingrese su nombre:");
    while (nombre == []){nombre = prompt ("Ingrese su nombre:");}
    alert("¡Bienvenido " + nombre + "!");
}

saludo();