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
    bloBot();
    var imagen = document.getElementById("estAta");
    var ataque= document.getElementById("efeAguAta");
    var defensa= document.getElementById("estDef");
    var vida=document.querySelector(".vidEne");
    var mensaje=document.querySelector(".mensaje");
    imagen.src = "sprites/Atacante/ataca.gif";
    ataque.src="sprites/ataque/agua.gif";
    defensa.src="sprites/Enemigo/golpeado.gif";
    setTimeout(function(){imagen.src = "sprites/Atacante/espera.gif";},900 ); 
    var dan= calDan(0,Math.floor(Math.random() * 3))
    var nueVid=(vida.offsetWidth-dan ).toString()+"px"; 
    menGol(dan);
    if(parseInt(nueVid)<1){vida.style.width="0px";}else{vida.style.width=nueVid;}
    setTimeout(function(){ataque.src="";
    defensa.src="sprites/Enemigo/espera.gif";
    var fin=finJuego();
    if(fin){return};  
    mensaje.src="sprites/interfaz/mensaje/defiendete.gif";    
    asiDef();},3000 );
  }

function ataTru() {
    var imagen = document.getElementById("estAta");
    var ataque= document.getElementById("efeTruAta");
    var defensa= document.getElementById("estDef");
    var vida=document.querySelector(".vidEne");
    var mensaje=document.querySelector(".mensaje");
    imagen.src = "sprites/Atacante/ataca.gif";
    ataque.src="sprites/ataque/trueno.gif";
    defensa.src="sprites/Enemigo/golpeado.gif";
    setTimeout(function(){imagen.src = "sprites/Atacante/espera.gif";},900 );
    var dan= calDan(1,Math.floor(Math.random() * 3))
    var nueVid=(vida.offsetWidth-dan ).toString()+"px"; 
    menGol(dan);
    if(parseInt(nueVid)<1){vida.style.width="0px";}else{vida.style.width=nueVid;}
    setTimeout(function(){ataque.src="";
    defensa.src="sprites/Enemigo/espera.gif";
    var fin=finJuego();
    if(fin){return};   
    mensaje.src="sprites/interfaz/mensaje/defiendete.gif";    
    asiDef();},3000 );
  }
  
function ataFue() {
        var imagen = document.getElementById("efeFueAta");
        var ataque= document.getElementById("estAta");        
        var defensa= document.getElementById("estDef");
        var vida=document.querySelector(".vidEne");
        var mensaje=document.querySelector(".mensaje");
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
            var dan= calDan(1,Math.floor(Math.random() * 3))
            var nueVid=(vida.offsetWidth-dan ).toString()+"px";         
            if(parseInt(nueVid)<1){vida.style.width="0px";}else{vida.style.width=nueVid;}
            menGol(dan);
            setTimeout(function(){
                defensa.src="sprites/Enemigo/espera.gif";
                reiniciarEstilos(imagen, hojaEstilos);
                var fin=finJuego();
                if(fin){return};   
                mensaje.src="sprites/interfaz/mensaje/defiendete.gif";                
                asiDef(); 
            },2000);                       
          }, 1000);
        
    }
function reiniciarEstilos(imagen, hojaEstilos) {    
  imagen.style.position = "";
  imagen.style.top = "";
  imagen.style.left = "";
  imagen.style.animation = "";
  imagen.style.opacity = "";
  

  // Eliminar el estilo keyframes
  hojaEstilos.parentNode.removeChild(hojaEstilos);
}
//Calcula el daño de los ataques
function calDan(ata,def){   
  const combinaciones = {
    "0-0": 40, // agua vs agua
    "0-1": 80, // agua vs fuego
    "0-2": 0, // agua vs rayo
    "1-0": 0, // fuego vs agua
    "1-1": 40, // fuego vs fuego
    "1-2": 80, // fuego vs rayo
    "2-0": 40, // rayo vs agua
    "2-1": 0, // rayo vs fuego
    "2-2": 80 // rayo vs rayo
  };
  cal=ata.toString()+"-"+def.toString();
  return combinaciones[cal]
}
//envía mensaje dependiendo de la cantidad de ataque hecho
function menGol(dan){
  var mensaje=document.querySelector(".mensaje");
  if(dan==80){
    mensaje.src="sprites/interfaz/mensaje/golpecritico.gif";
  }else if(dan==40){
    mensaje.src="sprites/interfaz/mensaje/golpeacertado.gif";
  }else if(dan==0){
    mensaje.src="sprites/interfaz/mensaje/fallocritico.gif" ;
  }
}

//bloquea los botones 

function bloBot(){
  var btnAgu=document.querySelector('.btnAgu');
  var btnFue=document.querySelector('.btnFue');
  var btnTru=document.querySelector('.btnTru');
  btnAgu.onclick="";
  btnFue.onclick="";
  btnTru.onclick="";
}

//asigna los botones a defensa
function asiDef(){
  var btnAgu=document.querySelector('.btnAgu');
  var btnFue=document.querySelector('.btnFue');
  var btnTru=document.querySelector('.btnTru');
  btnAgu.setAttribute("onclick", "escAta(0)");
  btnFue.setAttribute("onclick", "escAta(1)");
  btnTru.setAttribute("onclick", "escAta(2)");
}
//asigna los botones ataque
function asiAta(){
  var btnAgu=document.querySelector('.btnAgu');
  var btnFue=document.querySelector('.btnFue');
  var btnTru=document.querySelector('.btnTru');
  btnAgu.setAttribute("onclick", "ataAgu()");
  btnFue.setAttribute("onclick", "ataFue()");
  btnTru.setAttribute("onclick", "ataTru()");
}
//ataque oponente
function escAta(dan){
  var ata=Math.floor(Math.random() * 3)
  if (ata==0){
    opoAta(dan,"sprites/ataque/agua2.gif",0,'.aguEne');
  }else if(ata==1){
    opoAta(dan,"sprites/ataque/fuego2.gif",1,'.fueEne');
  }else if(ata==2){
    opoAta(dan,"sprites/ataque/trueno2.gif",2,'.truEne');
  }
}

function opoAta(dan,tipAta,valAta,tipBot) {
  bloBot();
  var imagen = document.querySelector('.pnjEne');
  var ataque= document.querySelector(tipBot);
  var defensa= document.querySelector('.pnjAta');
  var vida=document.querySelector(".vidAta");
  var mensaje=document.querySelector(".mensaje");
  imagen.src = "sprites/Enemigo/ataca.gif";
  ataque.src=tipAta;
  defensa.src="sprites/Atacante/golpeado.gif";
  setTimeout(function(){imagen.src = "sprites/Enemigo/espera.gif";},900 ); 
  dan= calDan(valAta,dan);
  var nueVid=(vida.offsetWidth-dan ).toString()+"px"; 
  menGol(dan);
  if(parseInt(nueVid)<1){vida.style.width="0px";}else{vida.style.width=nueVid;}  
  setTimeout(function(){ataque.src="";
  defensa.src="sprites/Atacante/espera.gif";
  var fin=finJuego();
  if(fin){return};   
  mensaje.src="sprites/interfaz/mensaje/ataca.gif";  
  asiAta();},3000 );
}

function finJuego(){
  var atacante=document.querySelector(".vidAta");
  var imgAta=document.querySelector('.pnjAta');
  var imgEne=document.querySelector('.pnjEne');
  var enemigo=document.querySelector(".vidEne");
  var snd=document.querySelector(".sonido");  
  if(atacante.offsetWidth<1){
    bloBot();
    imgAta.src="sprites/Atacante/muere.gif";
    snd.src="sonidos/muerte.mp3";
    snd.play();
    recarga();
    return true 
  }
  if(enemigo.offsetWidth<1){
    bloBot();
    imgEne.src="sprites/Enemigo/muere.gif";    
    snd.src="sonidos/ganador.mp3";
    snd.play();
    recarga();
    return true
  }
}

function recarga(){  
  var divPri=document.querySelector('.menPri');
  var btnIni=document.querySelector(".btnIni");
  divPri.style.display="block";
  btnIni.style.width="50px";
  btnIni.style.left="45%";
  btnIni.style.visibility="visible";
  btnIni.src="sprites/interfaz/menu/recarga.gif";
  btnIni.setAttribute("onmousedown", "");
  btnIni.setAttribute("onmouseup", "location.reload()");
  
}

//reproducir audio ambientacion
function ambientacion() {
  var amb=document.querySelector('.sonido');
  amb.src="sonidos/ambientacion.mp3";
  amb.play();
}

//funcion menu principal

function inicio(){
  var menPri=document.querySelector('.menuPri');
  var mensaje=document.querySelector('.mensaje');
  var creado=document.querySelector('.creado');
  var btnIni=document.querySelector('.btnIni');
  var divPri=document.querySelector('.menPri');
  divPri.style.display="none";
  menPri.style.visibility= "hidden";
  creado.style.visibility= "hidden";
  btnIni.style.visibility= "hidden";
  mensaje.src="sprites/interfaz/mensaje/ataca.gif";  
  ambientacion();
}