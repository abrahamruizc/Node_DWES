const funciones = require("./calculadora");
const palabras = require("./array");

let suma = funciones.sumar(2,3);
console.log(suma);
let restar = funciones.restar(2,3);
console.log(restar);
let multiplicar = funciones.multiplicar(2,3);
console.log(multiplicar);
//tgr

let array = new Array("hola","adios","manolo","patata");

let primera = palabras.primera(array);
console.log(primera);
let ultima = palabras.ultima(array);
console.log(ultima);
let cantidad = palabras.numero(array);
console.log(cantidad);

// let palabra = palabras.holaa();