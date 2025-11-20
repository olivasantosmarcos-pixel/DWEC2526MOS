let contador = 0;

function colorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operacion").value;
    let resultado = 0;
    let resultadoTexto = document.getElementById("resultado");
    let colorOperacion = "";

    if (op === "sumar") {
        resultado = n1 + n2;
        colorOperacion = "red";
    } else if (op === "restar") {
        resultado = n1 - n2;
        colorOperacion = "yellow";
    } else if (op === "multiplicar") {
        resultado = n1 * n2;
        colorOperacion = "green";
    } else if (op === "dividir") {
        if (n2 === 0) {
            alert("No se puede dividir entre 0");
            return;
        }
        resultado = n1 / n2;
        colorOperacion = "blue";
    }

    resultadoTexto.innerHTML = "Resultado: " + resultado;
    document.body.style.backgroundColor = colorAleatorio();

    contador++;
    document.getElementById("contador").innerHTML = contador;

    let historial = document.getElementById("historial");
    historial.innerHTML += 
        `<span style="color:${colorOperacion};">${n1} ${op} ${n2} = ${resultado}</span><br>`;
}

function limpiarHistorial() {
    document.getElementById("historial").innerHTML = "";
    contador = 0;
    document.getElementById("contador").innerHTML = "0";
}
