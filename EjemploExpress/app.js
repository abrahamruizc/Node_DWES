let express = require('express');
let app = express();
app.get("/", function(req, res){
    res.send("¡Hola Mundo!");
});
app.get("/:name", function(req, res){
    res.send("¡Hola " + req.params.name + "!");
});
app.listen(3000, function () {
    console.log("Aplicacion de ejemplo escuchando en el puerto 3000");
});