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

//Sección de cambio de imagen de Ataque

function ataAgu() {
    var imagen = document.getElementById("estAta");
    var ataque= document.getElementById("EfeAguAta");
    var defensa= document.getElementById("estDef");
    imagen.src = "sprites/Atacante/ataca.gif";
    ataque.src="sprites/ataque/agua.gif";
    defensa.src="sprites/Enemigo/golpeado.gif"
    setTimeout(function(){imagen.src = "sprites/Atacante/espera.gif";},900 );
    setTimeout(function(){ataque.src="";defensa.src="sprites/Enemigo/espera.gif";},5000 );
  }
  
  
  
