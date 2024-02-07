//La variable Document establece un punte entre 
// HTML y JS

//Seleccionamos h1 y le damos un valor
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Numero Secreto';

//Selecionamos p y le damos un parrafo
let parrafo = document.querySelector('p');
titulo.innerHTML = 'Indica un Número del 1 al 10';
*/


//Declarando variables
let numeroSecreto = generarNumeroSecreto();


//Declarando funciones

function asignarTextoElemento(elemento, texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //valorUsuario es el valor de Id en el html
 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //de string a entero
    console.log(typeof(numeroDeUsuario) );  //verificamos lo que ingresa el usuario
    console.log(typeof(numeroSecreto) );  //verificamos el numero generado
    //Verificando numeros
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numeroSecreto); //comparando numero de usuario con num secreto
    //Nota usar tres signos === significa que debe ser igual en valor y en tipo de dato
    return;
}

function generarNumeroSecreto() {
 return  Math.floor(Math.random()*10+1);   
}

//Usando la funcion:
asignarTextoElemento('h1',"Juego del numero secreto!");
asignarTextoElemento('p',"Indica un Número del 1 al 100");