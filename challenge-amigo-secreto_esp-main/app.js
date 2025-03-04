// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let ingresarNombres= document.getElementById("amigo");
    // Con el método getElementById seleccionamos el elemento con el id "amigo" en el index.html y lo almacenamos en la variable ingresarNombres 
    let sorteoAmigos = ingresarNombres.value;
     // Colocamos el .value para poner almacenar el nombre del amigo ingresado en la variable sorteoAmigos
     // En este caso la variable !amigos significa que si no hay amigos ingresados, 
     // entonces se ejecutará el mensaje del alert 
    if(!sorteoAmigos){ 
        alert("Debes ingresar el nombre de tu amigo");
        return; 
    }
    amigos.push(sorteoAmigos); // Con el método push agregamos el nombre del amigo a la lista de "amigos[]"
    ingresarNombres.value = ""; // Con el método .value limpiamos el campo de texto para que el usuario pueda ingresar otro nombre
    ingresarNombres.focus(); // Con el método .focus() se enfoca en el campo de texto para que el usuario pueda seguir ingresando nombres
    enlistarAmigos(); // Llamamos a la función enlistarAmigos para que se muestre el nombre del amigo ingresado en la lista
}

function enlistarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos"); // Con el método getElementById seleccionamos el elemento con el id "listaAmigos" en el index.html
    listaAmigos.innerHTML = ""; // Con el método .innerHTML limpiamos la lista de amigos para que no se repitan los nombres ingresados
    
    for(let i = 0; i < amigos.length; i++) { // Con el bucle for recorremos la lista de amigos. El termino length se usa para indicar el tamaño de la lista 
    let item = document.createElement("li"); // Con el método createElement creamos un elemento de lista
    item.textContent = amigos[i]; // Con el método textContent agregamos el nombre del amigo a la lista
    listaAmigos.appendChild(item); // Con el método appendChild agregamos el nombre del amigo a la lista
    }
}

function sortearAmigo(){
    if(amigos.length < 3){ // Si la cantidad de amigos es menor a 3, entonces se ejecutará el mensaje del alert
        alert("Debes ingresar el nombre de al menos tres amigos");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; /* Con el método Math.floor(Math.random()) se selecciona un amigo al azar */
    let resultado = document.getElementById("resultado"); /* Con el método getElementById seleccionamos el elemento con el id "resultado" en el index.html */
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`; /* Con el método .innerHTML mostramos el nombre del amigo sorteado */

    let limpiarSorteo = document.getElementById("listaAmigos"); /* Con el método getElementById seleccionamos el elemento con el id "sortear" en el index.html */
    limpiarSorteo.innerHTML = ""; /* Con el método .innerHTML limpiamos la lista de amigos */
}

function reiniciarJuego (){
     // Limpiamos la lista de amigos
     amigos = []; // Vaciar la lista de amigos
    
     // Limpiamos la lista de amigos en la interfaz
     let listaAmigos = document.getElementById("listaAmigos");
     listaAmigos.innerHTML = "";
 
     // Limpiamos el resultado del sorteo
     let resultado = document.getElementById("resultado");
     resultado.innerHTML = "";
 
     // Limpiamos el campo de entrada
     let ingresarNombres = document.getElementById("amigo");
     ingresarNombres.value = "";
 
     // Enfocamos el campo de entrada
     ingresarNombres.focus();
}


