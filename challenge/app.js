// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; // creo el vector 
function agregarAmigo(){
let x  = document.querySelector('#amigo');
let nombre = x.value
    if (nombre !==""){        
        nombres.push(nombre)//meto lo que mando en el formulario al vector
        console.log (nombres);
        x.value = "";
        let ul= document.querySelector ('#listaAmigos');
        ul.innerHTML = (`${nombres}`);
    }else{
        alert("Por favor, ingresa un nombre.");
    }
}

function sortearAmigo() {
    if(nombres.length ==0){ //se evalua si el vector no está vacio
        alert ("fuck u");
    }else{
        console.log(`esto es la funcion de sortear nombres ${nombres}`);
        const indiceAleatorio = Math.floor(Math.random() * nombres.length); //aqui genero un numero
        const nombreAleatorio = nombres[indiceAleatorio]; //aqui dijo el elemento selecionado es el que ocupa el numero aleatorio
        let p = document.querySelector('#resultado');
        p.innerHTML= (`tu amigo secreto es ${nombreAleatorio}`)
    }
}