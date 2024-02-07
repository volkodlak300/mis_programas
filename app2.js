let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= 10;

console.log(numeroSecreto);

//Funciones

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//Verificar Intento se dispara al dar un click
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //Verificacion

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
      // Al boton reiniciar le removemos el atributo de disable
      // Cuando acierte el boton reinicar se activa
        document.getElementById('reiniciar').removeAttribute('disabled');
    }    else {
        //El usuario no Acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        
    }
    intentos++;
    limpiarCaja();
    return;
}


function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros Posibles');

    }else{

        //Si el numero generado esta incluido en la lista
        //metodo includes verifica si numeroGenerado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Si, esta en la lista
            return generarNumeroSecreto(); //genera otro numero
        }else{
            //No. esta en la lista
            listaNumerosSorteados.push(numeroGenerado); //agrega num a la lista
            return numeroGenerado;
        }
    }
}
/*
    function limpiarCajaForma1() {
        //limpia el valor de Usuario
    let valorCaja  =  document.querySelector('#valorUsuario'); //El ID del imput
    valorCaja.value = '';  //Vacia el valorUsuario
    }
*/

//Limpiar caja Forma 2
function limpiarCaja() {
    //limpia el valor de Usuario
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales(params) {
//Usando la funcion:
    asignarTextoElemento('h1',"Juego del numero secreto!");
    asignarTextoElemento('p',`Indica un Número del 1 al ${numeroMaximo}`);    
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego (params) {
    //Limpiar caja
    limpiarCaja();
    //Condiciones iniciales del juego 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();