const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/animales', (req, res) => {
    let animalFavorito = req.body.variableEnviada;
    res.render('tuanimal.ejs', {animalParaEnviarWeb: animalFavorito});
});

app.listen(3000, () => {
    console.log('servidor escuchando por el puerto 3000');
});