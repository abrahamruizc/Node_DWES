let objetoAExportarAlFinal =  {}
let objetoAExportarAlFinaldos =  {}

let DNI = ["47342302F"];
let productos = [{nombre: "neopreno", precio: 70},{nombre: "gafas", precio: 30},{nombre: "aletas", precio: 50},
{nombre: "boquilla", precio: 10},{nombre: "tabla", precio: 60},{nombre: "cana", precio: 80},
{nombre: "valvula", precio: 30},{nombre: "arpon", precio: 80},
{nombre: "tubo", precio: 20},{nombre: "gomas", precio: 10}];

objetoAExportarAlFinal.validarUsuario = function(dni, nombre, apellidos, contrasena, email, telefono) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(comprobarDni(dni) && compruebaNombreApellido(nombre) && compruebaNombreApellido(apellidos) && compruebaContrasena(contrasena) && compruebaEmail(email) && compruebaTelefono(telefono)){
            for(let i = 0; i<DNI.length; i++){
              if(dni != DNI[i]){
                resolve("DATOS: Valido");
              } else{
                reject("ERROR: hay algun dato con formato incorrecto");
              }
            }
          } else {
            reject("ERROR: hay algun dato con formato incorrecto");
          } 
        }, 2000);
    });
}




function compruebaNombreApellido(nombre) {
  const validacion =/^(([a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(nombre);
}

function compruebaTelefono(telefono) {
  const validacion = /^[+][3][4]+\s[0-9]{9}$/;
  return validacion.test(telefono);
}

function compruebaContrasena(contrasena) {
  const validacion = /^.{8,10}$/;
  return validacion.test(contrasena);
}

function compruebaEmail(email) {
  const validacion = /^([a-zA-Z]+)[@]([a-z]+)[.][a-z]{2,3}$/;
  return validacion.test(email);
}

function comprobarDni(dni){
  const validacion =/^[XYZ]?([0-9]{7,8})([A-Z])$/;
  return validacion.test(dni);
}

module.exports = objetoAExportarAlFinal;