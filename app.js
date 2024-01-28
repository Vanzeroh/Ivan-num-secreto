let numeroSecreto; 
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10; 

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
}

function asignarTextoElemento(elemento, texto){
    let elmentoHTML = document.querySelector(elemento);
    elmentoHTML.innerHTML = texto;  
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${(intentos == 1) ? "intento!" : "intentos!"}`);
        document.getElementById ("reiniciar").removeAttribute("disabled");
    } else{ 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "¡El número secreto es menor!");
        } else {
            asignarTextoElemento("p", "¡El número secreto es mayor!");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
        document.querySelector("#valorUsuario").value = "";
}
  
function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
         //si el número generado aleatoriamente está en la lista lo manda al final de la lista cada vez que se reinicia el juego

         console.log(numeroGenerado);
         console.log(numerosSorteados);

         if(numerosSorteados.length == numeroMaximo) {
            asignarTextoElemento("P", "¡Ya se sortearon todos los números posibles!")
         } else {
            if (numerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                numerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "¡Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled",true)
}

    condicionesIniciales();




    

