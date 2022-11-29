let express = require('express');
const app = express();
const puertoServidor = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(puertoServidor, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
