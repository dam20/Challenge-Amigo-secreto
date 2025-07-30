//Variables Globales
let amigos = [];



//Funciones

function validarEntrada() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("El nombre del amigo no puede estar vacio");
        return null;
    }
    return amigo;
}

function agregarAmigo() {
    let amigo = validarEntrada();
    if (amigo != null) {
        amigos.push(capitalizarPrimeraLetra(amigo));
        mostrarAmigos();
        limpiarPorId("amigo");
    }
}

function capitalizarPrimeraLetra(amigo) {
    return amigo.charAt(0).toUpperCase() + amigo.slice(1);
}

function mostrarAmigos() {
    asignarTextoId("listaAmigos", `${crearListaAmigos()}`);
}

function crearListaAmigos() {
    let lista = "";
    let n = 0;
    while (n < amigos.length) {
        lista += `<li>${amigos[n]}</li>`;
        n++;
    }
    return lista;
}

function sortearAmigo() {
    if (amigos.length != 0) {
        mostrarAmigoSorteado(amigos[Math.floor(Math.random() * amigos.length)]);
    }
}

function mostrarAmigoSorteado(amigo) {
    asignarTextoId("resultado", amigo);
}

function asignarTextoId(id, texto) {
    document.getElementById(id).innerHTML = texto;
    return;
}

function limpiarPorId(id) {
    document.getElementById(id).value = "";
    document.getElementById(id).focus();
}


limpiarPorId("amigo");