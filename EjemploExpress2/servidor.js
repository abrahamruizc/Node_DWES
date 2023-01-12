let express = require('express');
const app = express();
const puertoServidor = 3000;

app.get("/", function(request, response){
    response.send("Enhorabuena, estas conectado al servidor express");
});
app.get("/:ejemplojson", function(req, res){
    res.send({
        nombre: "abraham",
        edad: 21,
        aficiones: ["cazar ñus", "bañar lagartos"]
    });
});
app.listen(puertoServidor, () => {
    console.log("Servidor escuchando en el puerto 3000");
});