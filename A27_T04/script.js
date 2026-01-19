const img1 = "luigi.png";
const img2 = "mariobros2.png";
const img3 = "sonic.png";
const img4 = "toad.png";
const img5 = "yoshi.png";

let sprite1 = null;
let sprite2 = null;
let sprite3 = null;
let sprite4 = null;
let sprite5 = null;

function crearSprite(rutaImagen) {
    const sprite = document.createElement("img");
    sprite.className = "sprite"; 
    sprite.src = rutaImagen;      

    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);

    sprite.style.left = x + "px";
    sprite.style.top = y + "px";

    document.body.appendChild(sprite);
    return sprite;
}


function crearSprites() {
    sprite1 = crearSprite(img1);
    sprite2 = crearSprite(img2);
    sprite3 = crearSprite(img3);
    sprite4 = crearSprite(img4);
    sprite5 = crearSprite(img5);
}

function borrarSprites() {
    if (sprite1) document.body.removeChild(sprite1);
    if (sprite2) document.body.removeChild(sprite2);
    if (sprite3) document.body.removeChild(sprite3);
    if (sprite4) document.body.removeChild(sprite4);
    if (sprite5) document.body.removeChild(sprite5);

    sprite1 = null;
    sprite2 = null;
    sprite3 = null;
    sprite4 = null;
    sprite5 = null;
}

document.getElementById("btnBorrar").onclick = borrarSprites;
document.getElementById("btnCrear").onclick = crearSprites;

window.onload = crearSprites;
