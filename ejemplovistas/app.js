const express = require('express');
const app = express();
const puerto = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Esto es un texto plano devuelto al usuario con SEND')
});

app.get('/:nombre/:edad', (req, res) => {
    let nombreUsuario = req.params.nombre;
    let edad = req.params.edad;
    let cuantas = nombreUsuario.length;
    let mayor = "no";
    if(edad >= 18){
        mayor = "si";
    }
    res.render('cuantasletras.ejs',{nombreUsuario: nombreUsuario, cuantas: cuantas, mayor: mayor});
});

app.listen(puerto, () => {
    console.log('Servidor escuchando por el puerto '+ puerto);
});