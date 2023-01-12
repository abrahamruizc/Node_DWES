const e = require("express");

const empleados = [{id: 1, nombre: "fernando"},{id: 2, nombre: "linda"},{id: 3, nombre: "karen"}];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado){
        callback(null, empleado);
    } else {
        callback("empleado con id:" + id + " no existe");
    }
}

const id = 5;

getEmpleado(id, (err, empleado) => {
    if (err){
        console.log("error");
        return console.log(err);
    }
    console.log("empleado existe");
    console.log(empleado);
});