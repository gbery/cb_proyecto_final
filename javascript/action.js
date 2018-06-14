function saludar(persona) {
    alert("Hola a " + persona);
}

function sumar() {
    var numeroA = 0;
    var numeroB = 0;
    var resultado = 0;

    numeroA = parseFloat(document.getElementById("numeroA").value);
    numeroB = parseFloat(document.getElementById("numeroB").value);

    console.log(numeroA + numeroB);
    resultado = numeroA + numeroB;

    document.getElementById("resultado").innerHTML = resultado;
}

function restar() {
    var numeroA = 0;
    var numeroB = 0;

    numeroA = parseFloat(document.getElementById("numeroA").value);
    numeroB = parseFloat(document.getElementById("numeroB").value);

    console.log(numeroA - numeroB);
}

function multiplicar() {
    var numeroA = 0;
    var numeroB = 0;

    numeroA = parseFloat(document.getElementById("numeroA").value);
    numeroB = parseFloat(document.getElementById("numeroB").value);

    console.log(numeroA * numeroB);
}

function dividir() {
    var numeroA = 0;
    var numeroB = 0;

    numeroA = parseFloat(document.getElementById("numeroA").value);
    numeroB = parseFloat(document.getElementById("numeroB").value);

    console.log(numeroA/numeroB);
}