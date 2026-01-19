let puntos = 0;
let enJuego = false;

let timeout1;
let timeout2;

const juego = document.getElementById("pantalla");
const puntuacionText = document.getElementById("puntos");

document.getElementById("startBtn").addEventListener("click", startJuego);
document.getElementById("pauseBtn").addEventListener("click", pausarJuego);
document.getElementById("reiniciarBtn").addEventListener("click", reiniciarJuego);

function startJuego(){
    

    
    timeout1 = setTimeout(crearSprite1, 1000);

    
    timeout2 = setTimeout(crearSprite2, 3000);
}

function pausarJuego(){
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    enJuego = false;
}

function reiniciarJuego(){
    pausarJuego();
    juego.innerHTML = "";
    puntos = 0;
    puntuacionText.textContent = "Puntos: 0";
}

function crearSprite1(){
    

    const sprite = document.createElement("div");
    sprite.className = "sprite sprite1";


    const maxX = juego.clientWidth - 40; 
    const maxY = juego.clientHeight - 40; 
    sprite.style.left = Math.floor(Math.random() * maxX) + "px";
    sprite.style.top = Math.floor(Math.random() * maxY) + "px";

    sprite.addEventListener("click", function(){
        puntos++;
        puntuacionText.textContent = "Puntos: " + puntos;
        sprite.remove();
    });

    juego.appendChild(sprite);
}

function crearSprite2(){
    

    const sprite = document.createElement("div");
    sprite.className = "sprite sprite2";

    const maxX = juego.clientWidth - 40;
    const maxY = juego.clientHeight - 40;
    sprite.style.left = Math.floor(Math.random() * maxX) + "px";
    sprite.style.top = Math.floor(Math.random() * maxY) + "px";

    sprite.addEventListener("click", function(){
        puntos++;
        puntuacionText.textContent = "Puntos: " + puntos;
        sprite.remove();
    });

    juego.appendChild(sprite);
}
 