//importamos el modulo de express
let express = require('express');

//creamos la aplicacion de express
const app = express();
//declaramos el puerto del servidor el cual usaremos mas adelante

const puertoServidor = 8080;
//definimos como estaticas las peticiones de los ficheros estaticos que se encuentran en la carpeta public
app.use(express.static(__dirname + '/public'));

//introducimos el puerto definido anteriormente donde va a escuchar el servidor, y el mensaje
app.listen(puertoServidor, () => {
    console.log("Servidor escuchando en el puerto 8080");
});

