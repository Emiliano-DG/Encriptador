const textoIngresado = document.getElementById("introducir-texto")

const bntEncriptar = document.getElementById("btn-encriptar")
const bntDesencriptar = document.getElementById("btn-desencriptar")
const btncopiar = document.getElementById("btn-copiar")

const mensajeEncriptado = "TEXTO ENCRIPTADO"
const mensajeDesencriptado = "TEXTO DESENCIPTADO"

let mayus = /[A-Z]/g
let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g

let none = "none"
let visible = ""

function desaparecer(vista) {
    document.getElementById("resultado").style.display = vista
    document.getElementById("btn-copiar").style.display = vista
}

desaparecer(none)

function encriptar() {

    let texto = textoIngresado.value
    if ((texto.match(mayus)) || (texto.match(caracteres))) {
        alert("No se deben utilizar : Mayusculas, acentos ni caracteres especiales")
        document.getElementById("conteiner-img").style.display = ""
    }

    textoEncriptado = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat")

    document.querySelector(".text1").style.display = "none"
    document.querySelector(".text2").style.display = "none"
    document.getElementById("img-munieco").style.display = "none"
    document.getElementById("resultado").innerHTML = textoEncriptado
    document.getElementById("titulo-resultado").innerHTML = mensajeEncriptado
    desaparecer(visible)
}

function desencriptar() {

    let texto = textoIngresado.value
    if ((texto.match(mayus)) || (texto.match(caracteres))) {
        alert("No se deben utilizar : Mayusculas, acentos ni caracteres especiales")
        document.getElementById("conteiner-img").style.display = ""
    }

    textoDesencriptado = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

    document.querySelector(".text1").style.display = "none"
    document.querySelector(".text2").style.display = "none"
    document.getElementById("img-munieco").style.display = "none"
    document.getElementById("resultado").innerHTML = textoDesencriptado
    document.getElementById("titulo-resultado").innerHTML = mensajeEncriptado
    desaparecer(visible)
}

function copy() {
    navigator.clipboard.writeText(textoEncriptado)
}

bntEncriptar.onclick = encriptar
bntDesencriptar.onclick = desencriptar
btncopiar.onclick = copy




