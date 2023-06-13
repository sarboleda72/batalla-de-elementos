//Sección de cambio de imagen del boton
function btnAguAba(elemento) {
    elemento.src = "sprites/interfaz/botones/agua/abajo.png"
  }
function btnAguArr(elemento) {
    elemento.src = "sprites/interfaz/botones/agua/arriba.png"
  }

function btnFueAba(elemento) {
    elemento.src = "sprites/interfaz/botones/fuego/abajo.png"
  }
function btnFueArr(elemento) {
    elemento.src = "sprites/interfaz/botones/fuego/arriba.png"
  }

function btnTruAba(elemento) {
    elemento.src = "sprites/interfaz/botones/trueno/abajo.png"
  }
function btnTruArr(elemento) {
    elemento.src = "sprites/interfaz/botones/trueno/arriba.png"
  }

//Sección de cambio de imagen de Ataque en enemigo

function ataAgu() {
    var imagen = document.getElementById("estAta");
    var ataque= document.getElementById("efeAguAta");
    var defensa= document.getElementById("estDef");
    imagen.src = "sprites/Atacante/ataca.gif";
    ataque.src="sprites/ataque/agua.gif";
    defensa.src="sprites/Enemigo/golpeado.gif";
    setTimeout(function(){imagen.src = "sprites/Atacante/espera.gif";},900 );
    setTimeout(function(){ataque.src="";defensa.src="sprites/Enemigo/espera.gif";},3000 );
  }

function ataTru() {
    var imagen = document.getElementById("estAta");
    var ataque= document.getElementById("efeTruAta");
    var defensa= document.getElementById("estDef");
    imagen.src = "sprites/Atacante/ataca.gif";
    ataque.src="sprites/ataque/trueno.gif";
    defensa.src="sprites/Enemigo/golpeado.gif";
    setTimeout(function(){imagen.src = "sprites/Atacante/espera.gif";},900 );
    setTimeout(function(){ataque.src="";defensa.src="sprites/Enemigo/espera.gif";},3000 );
  }
  
function ataFue() {
        var imagen = document.getElementById("efeFueAta");
        var ataque= document.getElementById("estAta");        
        var defensa= document.getElementById("estDef");
        ataque.src = "sprites/Atacante/ataca.gif";
        imagen.src="sprites/ataque/fuego-derecha.gif";
        imagen.style.position = "absolute";
        imagen.style.top="53.5%";
        imagen.style.left = "50%";
        imagen.style.animation = "aparecer-desplazar 1s linear forwards";
        imagen.style.opacity = "0";

        var estiloKeyframes = `
            @keyframes aparecer-desplazar {
            0% {
                opacity: 1;
                left:17%
                
            }
            100% {
                opacity: 1;
                left: 70%;
            }
            }
        `;

        var hojaEstilos = document.createElement("style");
        hojaEstilos.innerHTML = estiloKeyframes;
        document.head.appendChild(hojaEstilos);
        setTimeout(function() {
            imagen.src="";
            ataque.src ="sprites/Atacante/espera.gif";
            defensa.src="sprites/Enemigo/golpeado.gif";
            setTimeout(function(){
                defensa.src="sprites/Enemigo/espera.gif";
                reiniciarEstilos(imagen, hojaEstilos); 
            },2000);                       
          }, 1000);
        
    }
function reiniciarEstilos(imagen, hojaEstilos) {    ;
  imagen.style.position = "";
  imagen.style.top = "";
  imagen.style.left = "";
  imagen.style.animation = "";
  imagen.style.opacity = "";
  

  // Eliminar el estilo keyframes
  hojaEstilos.parentNode.removeChild(hojaEstilos);
}
