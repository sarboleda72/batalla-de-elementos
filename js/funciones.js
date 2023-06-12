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
    imagen.src = "sprites/Atacante/ataca.gif";    
    setTimeout(function(){imagen.src = "sprites/Atacante/espera.gif"},1000 );

  }
  
  
  
